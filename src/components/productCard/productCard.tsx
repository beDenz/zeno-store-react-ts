import React, { Fragment, useState, useContext } from "react";
import "./productCard.scss";
import Pagetitle from "../UI/pageTitle/pagetitle";
import { ProductItemsConfig } from "../../service/dataBaseState";
import { ShoppingCartContext } from "../../service/cart";
import { WishListItemContext } from "../../service/wishlist";
import { addToCart } from "../../utilities/utilities";

interface ProductCardConfig {
  itemDetail: ProductItemsConfig;
}

const ProductCard: React.FC<ProductCardConfig> = ({
  itemDetail
}): JSX.Element => {
  const [mainImage, setMainImage] = useState<string>(`${itemDetail.id}_1`);
  const [count, setCount] = useState<number>(1);
  const shoppingCartState = useContext(ShoppingCartContext);
  const WishListItemState = useContext(WishListItemContext);

  return (
    <Fragment>
      <Pagetitle />
      <div className="productCard display-flex">
        <div className="productCard__images display-flex flex-wrap">
          <div className="productCard__image image-main">
            <img
              src={`image/products/${itemDetail.category}/${mainImage}.jpg`}
              alt=""
            />
          </div>
          <div
            className="productCard__image image-small"
            onClick={() => setMainImage(`${itemDetail.id}_1`)}
          >
            <img
              src={`image/products/${itemDetail.category}/${itemDetail.id}_1.jpg`}
              alt=""
            />
          </div>
          <div
            className="productCard__image image-small"
            onClick={() => setMainImage(`${itemDetail.id}_2`)}
          >
            <img
              src={`image/products/${itemDetail.category}/${itemDetail.id}_2.jpg`}
              alt=""
            />
          </div>
          <div
            className="productCard__image image-small"
            onClick={() => setMainImage(`${itemDetail.id}_3`)}
          >
            <img
              src={`image/products/${itemDetail.category}/${itemDetail.id}_3.jpg`}
              alt=""
            />
          </div>
        </div>
        <div className="productCard__description">
          <h3 className="productCard__title">{itemDetail.title}</h3>
          <p className="productCard__price">${itemDetail.price}</p>
          <p className="productCard__text">{itemDetail.description}</p>
          <div className="display-flex">
            <div className="count display-flex flex-space-between align-center">
              <div
                className="count__operator display-flex align-center flex-justify-content-center"
                onClick={() => (count > 0 ? setCount(count - 1) : null)}
              >
                -
              </div>
              <div className="count__value">{count}</div>
              <div
                className="count__operator display-flex align-center flex-justify-content-center"
                onClick={() => setCount(count + 1)}
              >
                +
              </div>
            </div>
            <div
              className="productCard__button display-flex flex-justify-content-center align-center"
              onClick={() =>
                count > 0
                  ? addToCart(
                      shoppingCartState,
                      itemDetail.id,
                      itemDetail.price,
                      count
                    )
                  : null
              }
            >
              Add To Cart
            </div>
            <div
              className="wishList-button display-flex flex-justify-content-center align-center elegant-icon"
              onClick={() =>
                addToCart(WishListItemState, itemDetail.id, itemDetail.price)
              }
            >
              &#xe030;
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCard;
