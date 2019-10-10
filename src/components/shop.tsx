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

interface TitleConfig {
  title?: string;
}

const Shop: React.FC<TitleConfig> = (props): ReactElement => {
  // const [categoryFilter, setCategoryFilter] = useState({});
  const [priceFilter, setPriceFilter] = useState({
    minPrice: 1,
    maxPrice: 10000
  });

  const onChangePrice = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.value.match(/[^0-9]/gi)) {
      e.target.id === "minprice"
        ? setPriceFilter({ ...priceFilter, minPrice: +e.target.value })
        : setPriceFilter({ ...priceFilter, maxPrice: +e.target.value });
    } else console.log("no");
  };

  return (
    <section className="shop container-small display-flex margin-center">
      <div className="filters">
        <TagsList />
        <PriceFilter priceFilter={priceFilter} onChange={onChangePrice} />
      </div>
      <div className="shop__inner">
        <div className="shop__inner-first-row display-flex flex-space-between ">
          <div>
            <Pagetitle title={props.title} />
          </div>
          <div className="sort display-flex align-center">
            <ShopFilterResult />
            <SortBy />
            <StyleViewItems />
          </div>
        </div>
        <div className="featured-products__items display-flex flex-space-between flex-wrap">
          {productsList.map((item, index) => {
            if (
              item.price > priceFilter.minPrice &&
              item.price < priceFilter.maxPrice
            )
              return <ProductItem key={index} productList={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Shop;
