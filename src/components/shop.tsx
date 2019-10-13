import React, { ReactElement, useState, useContext, useEffect } from "react";
import Pagetitle from "./UI/pageTitle/pagetitle";
import ShopFilterResult from "./UI/shopFilterResult/shopFilterResult";
import SortBy from "./UI/sortBy/sortBy";
import StyleViewItems from "./UI/styleViewItems/styleViewItems";
import TagsList from "./UI/tagsList/tagsList";
import { productsList, ProductItemsConfig } from "../api/api";
import ProductItem from "./UI/productItem/productItem";
import PriceFilter from "./UI/priceFilter/priceFilter";
import classnames from "classnames";
import ProductCard from "./productCard/productCard";
import { ShoppingCartContext } from "../service/cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useLocation,
  useRouteMatch
} from "react-router-dom";

interface TitleConfig {
  title?: string;
  match: any;
}

interface ShopFilterConfig {
  minPrice: number;
  maxPrice: number;
  showCategory: string;
  filterResult: number;
}

const Shop: React.FC<TitleConfig> = ({ title, match }): ReactElement => {
  const [shopFilter, SetShopFilter] = useState<ShopFilterConfig>({
    minPrice: 1,
    maxPrice: 10000,
    showCategory: "all",
    filterResult: 0
  });
  const [styleViewState, setStyleViewState] = useState<string | null>("grid");

  const onChangePrice = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.value.match(/[^0-9]/gi)) {
      e.target.id === "minprice"
        ? SetShopFilter({ ...shopFilter, minPrice: +e.target.value })
        : SetShopFilter({ ...shopFilter, maxPrice: +e.target.value });
    }
  };
  const setShowCategory = (e: React.MouseEvent<HTMLElement>): void => {
    const target = e.target as HTMLElement;
    SetShopFilter({
      ...shopFilter,
      showCategory: target.innerHTML.toLowerCase()
    });
  };

  const setStyleView = (e: React.MouseEvent): void => {
    const target = e.target as HTMLElement;
    if (target.getAttribute("type") !== styleViewState)
      setStyleViewState(target.getAttribute("type"));
  };

  const getProductDetail = (
    array: ProductItemsConfig[],
    id: string
  ): ProductItemsConfig =>
    array.filter((item: ProductItemsConfig) => item.id === id)[0];

  const shoppingCartState = useContext(ShoppingCartContext);

  console.log(shoppingCartState.state);
  return (
    <section className="shop container-1500 display-flex margin-center">
      <div className="filters">
        <TagsList onClick={setShowCategory} />
        <PriceFilter priceFilter={shopFilter} onChange={onChangePrice} />
      </div>
      <div className="shop__inner">
        <div className="shop__inner-first-row display-flex flex-space-between ">
          <Pagetitle title={title} />
          {match.params.id === undefined ? (
            <div className="sort display-flex align-center">
              <ShopFilterResult filterResult={shopFilter.filterResult} />
              <SortBy />
              <StyleViewItems
                onClick={setStyleView}
                styleViewState={styleViewState}
              />
            </div>
          ) : null}
        </div>
        {match.params.id === undefined ? (
          <div
            className={classnames(
              "featured-products__items",
              {
                "display-flex flex-space-between flex-wrap":
                  styleViewState === "grid"
              },
              { "flex-collum": styleViewState === "list" }
            )}
          >
            {productsList
              .filter(item =>
                shopFilter.showCategory !== "all"
                  ? shopFilter.showCategory
                      .toLowerCase()
                      .charAt(0)
                      .toUpperCase() +
                      shopFilter.showCategory.toLowerCase().substring(1) ===
                    item.category
                      .toLowerCase()
                      .charAt(0)
                      .toUpperCase() +
                      item.category.toLowerCase().substring(1)
                  : true
              )
              .map((item, index) => {
                if (
                  item.price > shopFilter.minPrice &&
                  item.price < shopFilter.maxPrice
                ) {
                  return (
                    <ProductItem
                      key={index}
                      productList={item}
                      styleViewState={styleViewState}
                    />
                  );
                }
              })}
          </div>
        ) : (
          <ProductCard
            itemDetail={getProductDetail(productsList, match.params.id)}
          />
        )}
      </div>
    </section>
  );
};

export default Shop;
