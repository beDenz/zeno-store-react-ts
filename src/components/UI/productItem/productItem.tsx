import React, { useContext } from "react";
import { ProductItemsConfig } from "../../../service/dataBaseState";
import "./productItem.scss";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../../service/cart";
import { WishListItemContext } from "../../../service/wishlist";
import { addToCart } from "../../../utilities/utilities";

interface ProductItemConfig {
  productList: ProductItemsConfig;
  styleViewState: string | null;
}

const ProductItem: React.FC<ProductItemConfig> = ({
  styleViewState,
  productList
}) => {
  const shoppingCartState = useContext(ShoppingCartContext);
  const WishListItemState = useContext(WishListItemContext);
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
          src={`image/products/${productList.category}/${productList.id}_1.jpg`}
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
              WishListItemState.dispatch({
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
          onClick={() =>
            addToCart(shoppingCartState, productList.id, productList.price)
          }
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
          onClick={() =>
            addToCart(WishListItemState, productList.id, productList.price)
          }
        >
          &#xe030;
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
