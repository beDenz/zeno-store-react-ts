import React, { ReactElement, useState } from "react";
import Breadcrumb from "./UI/breadcrumb/breadcrumb";
import Pagetitle from "./UI/pageTitle/pagetitle";
import ShopFilterResult from "./UI/shopFilterResult/shopFilterResult";
import SortBy from "./UI/sortBy/sortBy";
import StyleViewItems from "./UI/styleViewItems/styleViewItems";
import TagsList from "./UI/tagsList/tagsList";
import { productsList } from "../api/api";
import ProductItem from "./UI/productItem/productItem";
import PriceFilter from "./UI/priceFilter/priceFilter";
import classnames from "classnames";

interface TitleConfig {
  title?: string;
}

interface ShopFilterConfig {
  minPrice: number;
  maxPrice: number;
  showCategory: string;
  filterResult: number;
}

const Shop: React.FC<TitleConfig> = (props): ReactElement => {
  const [shopFilter, SetShopFilter] = useState<ShopFilterConfig>({
    minPrice: 1,
    maxPrice: 10000,
    showCategory: "all",
    filterResult: 0
  });
  const [styleViewState, setStyleViewState] = useState<string | null>("list");

  const [tempState, setTempState] = useState(0);

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

  return (
    <section className="shop container-small display-flex margin-center">
      <div className="filters">
        <TagsList onClick={setShowCategory} />
        <PriceFilter priceFilter={shopFilter} onChange={onChangePrice} />
      </div>
      <div className="shop__inner">
        <div className="shop__inner-first-row display-flex flex-space-between ">
          <div>
            <Pagetitle title={props.title} />
          </div>
          <div className="sort display-flex align-center">
            <ShopFilterResult filterResult={shopFilter.filterResult} />
            <SortBy />
            <StyleViewItems
              onClick={setStyleView}
              styleViewState={styleViewState}
            />
          </div>
        </div>

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
                //setTempState(index + 1);
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
      </div>
    </section>
  );
};

export default Shop;
