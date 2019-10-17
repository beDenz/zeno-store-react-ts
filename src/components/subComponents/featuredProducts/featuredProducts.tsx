import React, { ReactElement } from "react";
import "./featuredProducts.scss";
import ProductItem from "../../UI/productItem/productItem";
import { productsList } from "../../../api/api";

const FeaturedProducts: React.FC = (): ReactElement => {
  return (
    <section className="featured-products container-small margin-center display-flex flex-collum align-center">
      <h3 className="featured-products__title">Featured Products</h3>
      <p className="featured-products__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore
      </p>
      <div className="featured-products__items display-flex flex-space-between">
        {productsList.slice(0, 8).map((item, index) => (
          <ProductItem key={index} productList={item} styleViewState="grid" />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
