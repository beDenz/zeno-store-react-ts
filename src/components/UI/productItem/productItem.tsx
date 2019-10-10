import React, { ReactElement } from "react";
import { ProductItemsConfig, productsList } from "../../../api/api";
import "./productItem.scss";

interface ProductItemConfig {
  productList: ProductItemsConfig;
}

const ProductItem: React.FC<ProductItemConfig> = props => {
  return (
    <div className="productItem">
      <div className="productItem__image">
        <img
          src={`image/products/${props.productList.category}/${props.productList.id}_1.jpg`}
          alt=""
        />
        <div className="productItem__icons">
          <div className="productItem__icon">&#xe030;</div>
          <div className="productItem__icon">&#xe013;</div>
        </div>
      </div>
      <div className="productItem__description">
        <h5 className="productItem__title">{props.productList.title}</h5>
        <span className="productItem__price">
          {props.productList.price + "$"}
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
