import React, { useContext } from "react";
import { ProductItemsConfig } from "../../../api/api";
import "./productItem.scss";
import classnames from "classnames";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ShoppingCartContext } from "../../../service/cart";

interface ProductItemConfig {
  productList: ProductItemsConfig;
  styleViewState: string | null;
}

const ProductItem: React.FC<ProductItemConfig> = ({
  styleViewState,
  productList
}) => {
  const shoppingCartState = useContext(ShoppingCartContext);
  return (
    <div
      className={classnames(
        { productItem: styleViewState === "grid" },
        { productItemList: styleViewState === "list" }
      )}
    >
      <div
        className={classnames(
          { productItem__image: styleViewState === "grid" },
          { productItemList__image: styleViewState === "list" }
        )}
      >
        <img
          src={`/image/products/${productList.category}/${productList.id}_1.jpg`}
          alt=""
        />
        <div
          className={classnames(
            { productItem__icons: styleViewState === "grid" },
            { productItemList__icons: styleViewState === "list" }
          )}
        >
          <div
            className={classnames(
              { productItem__icon: styleViewState === "grid" },
              { productItemList__icon: styleViewState === "list" }
            )}
            onClick={() =>
              shoppingCartState.dispatch({
                type: "add",
                payload: { id: productList.id, price: productList.price }
              })
            }
          >
            &#xe030;
          </div>
          <div
            className={classnames(
              { productItem__icon: styleViewState === "grid" },
              { productItemList__icon: styleViewState === "list" }
            )}
            onClick={() =>
              shoppingCartState.dispatch({
                type: "add",
                payload: { id: productList.id, price: productList.price }
              })
            }
          >
            &#xe013;
          </div>
        </div>
      </div>
      <div
        className={classnames(
          { productItem__description: styleViewState === "grid" },
          { productItemList__description: styleViewState === "list" }
        )}
      >
        <h5
          className={classnames(
            { productItem__title: styleViewState === "grid" },
            { productItemList__title: styleViewState === "list" }
          )}
        >
          <Link to={`/shop/${productList.id}`}>{productList.title}</Link>
        </h5>

        <span
          className={classnames(
            { productItem__price: styleViewState === "grid" },
            { productItemList__price: styleViewState === "list" }
          )}
        >
          {"$" + productList.price}
        </span>
        <p
          className={classnames(
            { displayNone: styleViewState === "grid" },
            {
              "productItemList__preview-description": styleViewState === "list"
            }
          )}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          pellem tesque magna laoret felis accumsan finibus.
        </p>
        <div
          className={classnames(
            { displayNone: styleViewState === "grid" },
            {
              "productItemList__button display-flex flex-justify-content-center align-center":
                styleViewState === "list"
            }
          )}
        >
          Add To Cart
        </div>
        <div
          className={classnames(
            { displayNone: styleViewState === "grid" },
            {
              "productItemList__button elegant-icon display-flex flex-justify-content-center align-center":
                styleViewState === "list"
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
