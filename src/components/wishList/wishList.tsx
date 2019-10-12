import React, { ReactElement } from "react";
import "./wishList.scss";

const WishList: React.FC = (): ReactElement => {
  return (
    <section className="wishList container-small margin-center">
      <div className="wishList__row-titles display-flex flex-space-between row-border">
        <h3 className="wishList__title flex-grow">Products</h3>
        <h3 className="wishList__title margin-right-60">Price</h3>
        <h3 className="wishList__title">Stock Status</h3>
      </div>
      <div className="wishList__row-product display-flex align-center flex-space-between row-border">
        <div className="wishList__product display-flex align-center width-50">
          <div className="wishList__image">
            <img src="" alt="" />
          </div>
          <h4 className="wishList__subtitle">Orange Chair</h4>
        </div>

        <span className="wishList__price">$136.00</span>

        <span className="wishList__stock">Instock</span>

        <div className="wishList__button-confirm">Add To Card</div>
        <span className="wishList__button elegant-icon">&#x4d;</span>
      </div>
      <div className="wishList__row-product display-flex align-center flex-space-between row-border">
        <div className="wishList__product display-flex align-center width-50">
          <div className="wishList__image">
            <img src="" alt="" />
          </div>
          <h4 className="wishList__subtitle">Table Desk</h4>
        </div>

        <span className="wishList__price">$1306.00</span>

        <span className="wishList__stock">Out of stock</span>

        <div className="wishList__button-confirm">Out of stock</div>
        <span className="wishList__button elegant-icon">&#x4d;</span>
      </div>
      <div className="wishList__row-product display-flex align-center flex-space-between row-border">
        <div className="wishList__product display-flex align-center width-50">
          <div className="wishList__image">
            <img src="" alt="" />
          </div>
          <h4 className="wishList__subtitle">Orange Chair</h4>
        </div>

        <span className="wishList__price">$136.00</span>

        <span className="wishList__stock">Instock</span>

        <div className="wishList__button-confirm">Add To Card</div>

        <span className="wishList__button elegant-icon">&#x4d;</span>
      </div>
    </section>
  );
};

export default WishList;
