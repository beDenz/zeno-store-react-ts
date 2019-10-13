import React, { ReactElement, Fragment, useState } from "react";
import "./productCard.scss";
import Pagetitle from "../UI/pageTitle/pagetitle";
import { ProductItemsConfig } from "../../api/api";

interface ProductCardConfig {
  itemDetail: ProductItemsConfig;
}

const ProductCard: React.FC<ProductCardConfig> = ({
  itemDetail
}): ReactElement => {
  console.log(itemDetail);

  const [mainImage, setMainImage] = useState<string>(`${itemDetail.id}_1`);

  return (
    <Fragment>
      <Pagetitle title="Product Left Sidebar" />
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
