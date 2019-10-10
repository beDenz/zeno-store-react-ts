import React, { ReactElement } from "react";
import Breadcrumb from "./UI/breadcrumb/breadcrumb";
import Pagetitle from "./UI/pageTitle/pagetitle";
import ShopFilterResult from "./UI/shopFilterResult/shopFilterResult";
import SortBy from "./UI/sortBy/sortBy";
import StyleViewItems from "./UI/styleViewItems/styleViewItems";
import TagsList from "./UI/tagsList/tagsList";
import { ProductItemsConfig, productsList } from "../api/api";
import ProductItem from "./UI/productItem/productItem";

interface TitleConfig {
  title?: string;
}

const Shop: React.FC<TitleConfig> = (props): ReactElement => {
  return (
    <section className="shop container-small display-flex margin-center">
      <div className="filters">
        <TagsList />
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
          {productsList.map((item, index) => (
            <ProductItem key={index} productList={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
