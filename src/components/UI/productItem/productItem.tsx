import React, { ReactElement } from "react";
import { ProductItemsConfig } from "../../../api/api";
import "./productItem.scss";
import classnames from "classnames";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

interface ProductItemConfig {
  productList: ProductItemsConfig;
  styleViewState: string | null;
}

const ProductItem: React.FC<ProductItemConfig> = props => {
  // http://localhost:3000/image/products/furniture/DIME008_1.jpg
  // http://localhost:3000/image/products/furniture/DIME008_1.jpg

  return (
    <div
      className={classnames(
        { productItem: props.styleViewState === "grid" },
        { productItemList: props.styleViewState === "list" }
      )}
    >
      <div
        className={classnames(
          { productItem__image: props.styleViewState === "grid" },
          { productItemList__image: props.styleViewState === "list" }
        )}
      >
        <img
          src={`/image/products/${props.productList.category}/${props.productList.id}_1.jpg`}
          alt=""
        />
        <div
          className={classnames(
            { productItem__icons: props.styleViewState === "grid" },
            { productItemList__icons: props.styleViewState === "list" }
          )}
        >
          <div
            className={classnames(
              { productItem__icon: props.styleViewState === "grid" },
              { productItemList__icon: props.styleViewState === "list" }
            )}
          >
            &#xe030;
          </div>
          <div
            className={classnames(
              { productItem__icon: props.styleViewState === "grid" },
              { productItemList__icon: props.styleViewState === "list" }
            )}
          >
            &#xe013;
          </div>
        </div>
      </div>
      <div
        className={classnames(
          { productItem__description: props.styleViewState === "grid" },
          { productItemList__description: props.styleViewState === "list" }
        )}
      >
        <h5
          className={classnames(
            { productItem__title: props.styleViewState === "grid" },
            { productItemList__title: props.styleViewState === "list" }
          )}
        >
          <Link to={`/shop/${props.productList.id}`}>
            {props.productList.title}
          </Link>
        </h5>

        <span
          className={classnames(
            { productItem__price: props.styleViewState === "grid" },
            { productItemList__price: props.styleViewState === "list" }
          )}
        >
          {"$" + props.productList.price}
        </span>
        <p
          className={classnames(
            { displayNone: props.styleViewState === "grid" },
            {
              "productItemList__preview-description":
                props.styleViewState === "list"
            }
          )}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          pellem tesque magna laoret felis accumsan finibus.
        </p>
        <div
          className={classnames(
            { displayNone: props.styleViewState === "grid" },
            {
              "productItemList__button display-flex flex-justify-content-center align-center":
                props.styleViewState === "list"
            }
          )}
        >
          Add To Cart
        </div>
        <div
          className={classnames(
            { displayNone: props.styleViewState === "grid" },
            {
              "productItemList__button elegant-icon display-flex flex-justify-content-center align-center":
                props.styleViewState === "list"
            }
          )}
        >
          &#xe030;
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
