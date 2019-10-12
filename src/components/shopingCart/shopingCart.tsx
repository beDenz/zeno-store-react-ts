import React, { ReactElement, Fragment } from "react";
import "./shopingCart.scss";
import Pagetitle from "../UI/pageTitle/pagetitle";

const ShopingCart: React.FC = (): ReactElement => {
  return (
    <Fragment>
      <Pagetitle />
      <div className="shopingCart container-small margin-center display-flex flex-collum">
        <div className="shopingCart__row-titles display-flex flex-space-between row-border">
          <h3 className="shopingCart__title width-50">Products</h3>
          <h3 className="shopingCart__title ">Price</h3>
          <h3 className="shopingCart__title ">Quantity</h3>
          <h3 className="shopingCart__title ">Total</h3>
        </div>
        <div className="shopingCart__row-product display-flex align-center flex-space-between row-border">
          <div className="shopingCart__product display-flex align-center width-50">
            <div className="shopingCart__image">
              <img src="" alt="" />
            </div>
            <h4 className="shopingCart__subtitle">Orange Chair</h4>
          </div>

          <span className="shopingCart__price">$136.00</span>

          <div className="count display-flex flex-space-between align-center">
            <div className="count__operator display-flex align-center flex-justify-content-center">
              -
            </div>
            <div className="count__value">1</div>
            <div className="count__operator display-flex align-center flex-justify-content-center">
              +
            </div>
          </div>

          <span className="shopingCart__price">$136.00</span>
          <span className="shopingCart__button elegant-icon">&#x4d;</span>
        </div>
        <div className="shopingCart__row-product display-flex align-center flex-space-between row-border">
          <div className="shopingCart__product display-flex align-center width-50">
            <div className="shopingCart__image">
              <img src="" alt="" />
            </div>
            <h4 className="shopingCart__subtitle">Orange Chair</h4>
          </div>

          <span className="shopingCart__price">$136.00</span>

          <div className="count display-flex flex-space-between align-center">
            <div className="count__operator display-flex align-center flex-justify-content-center">
              -
            </div>
            <div className="count__value">1</div>
            <div className="count__operator display-flex align-center flex-justify-content-center">
              +
            </div>
          </div>

          <span className="shopingCart__price">$136.00</span>
          <span className="shopingCart__button elegant-icon">&#x4d;</span>
        </div>
        <div className="shopingCart__row-product display-flex align-center flex-space-between row-border">
          <div className="shopingCart__product display-flex align-center width-50">
            <div className="shopingCart__image">
              <img src="" alt="" />
            </div>
            <h4 className="shopingCart__subtitle">Orange Chair</h4>
          </div>

          <span className="shopingCart__price">$136.00</span>

          <div className="count display-flex flex-space-between align-center">
            <div className="count__operator display-flex align-center flex-justify-content-center">
              -
            </div>
            <div className="count__value">1</div>
            <div className="count__operator display-flex align-center flex-justify-content-center">
              +
            </div>
          </div>

          <span className="shopingCart__price">$136.00</span>
          <span className="shopingCart__button elegant-icon">&#x4d;</span>
        </div>
        <div className="shopingCart__row-button display-flex flex-space-between">
          <div className="shopingCart__button-confirm">Continue ShopPping</div>
          <div className="shopingCart__button-confirm">Update Cart</div>
        </div>
        <div className="display-flex flex-space-between align-flex-end">
          <div className="discount">
            <h3 className="discount__title">Discount Codes</h3>
            <form className="discount__form display-flex align-center">
              <input
                className="discount__input"
                type="text"
                placeholder="Enter your coupon code"
              />
              <button className="discount__button">APPLY COUPON</button>
            </form>
          </div>

          <div className="totalPrice display-flex flex-collum flex-space-between">
            <h3 className="totalPrice__title">Cart Total</h3>
            <div className="totalPrice__subtotal display-flex flex-space-between">
              <div className="totalPrice__subtitle">Subtotal</div>
              <div className="totalPrice__price">$454.98</div>
            </div>
            <div className="totalPrice__button display-flex flex-justify-content-center align-center">
              PROCEED TO CHECKOUT
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ShopingCart;
