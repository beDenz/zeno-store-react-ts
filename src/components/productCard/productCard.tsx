import React, { ReactElement, Fragment } from "react";
import "./productCard.scss";
import Pagetitle from "../UI/pageTitle/pagetitle";

interface ProductCardConfig {
  onClick: (e: React.MouseEvent) => void;
}

const ProductCard: React.FC<ProductCardConfig> = ({
  onClick
}): ReactElement => {
  return (
    <Fragment>
      <Pagetitle title="Product Left Sidebar" />
      <div className="productCard display-flex">
        <div
          className="productCard__images display-flex flex-wrap"
          onClick={onClick}
        >
          <div className="productCard__image image-main">
            <img src="image/products/furniture/DIME008_1.jpg" alt="" />
          </div>
          <div className="productCard__image image-small">
            <img src="image/products/furniture/DIME008_1.jpg" alt="" />
          </div>
          <div className="productCard__image image-small">
            <img src="image/products/furniture/DIME008_2.jpg" alt="" />
          </div>
          <div className="productCard__image image-small">
            <img src="image/products/furniture/DIME008_3.jpg" alt="" />
          </div>
        </div>
        <div className="productCard__description">
          <h3 className="productCard__title">Atalaia Pouf</h3>
          <p className="productCard__price">$50.00</p>
          <p className="productCard__text">
            Talk about fine lines and great curves. Light blue polyester fabric,
            oak feet. That’s the beauty - made to suit your appreciation for
            clean.
          </p>
          <div className="display-flex">
            <div className="count display-flex flex-space-between align-center">
              <div className="count__operator display-flex align-center flex-justify-content-center">
                -
              </div>
              <div className="count__value">1</div>
              <div className="count__operator display-flex align-center flex-justify-content-center">
                +
              </div>
            </div>
            <div className="productCard__button display-flex flex-justify-content-center align-center">
              Add To Cart
            </div>
            <div className="wishList-button display-flex flex-justify-content-center align-center elegant-icon">
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
