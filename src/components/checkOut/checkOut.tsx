import React, { ReactElement } from "react";
import "./checkOut.scss";

const CheckOut: React.FC = (): ReactElement => {
  return (
    <section className="checkout container-small margin-center display-flex">
      <div className="billing-details">
        <h3 className="billing-details__title margin-bottom-30">
          Billing Details
        </h3>
        <div className="display-flex flex-space-between">
          <div>
            <h4 className="billing-details__subtitle margin-bottom-30">
              Fist Name<span>*</span>
            </h4>
            <input
              className="billing-details__input input-small margin-bottom-30"
              type="text"
              name=""
              id=""
            />
          </div>
          <div>
            <h4 className="billing-details__subtitle margin-bottom-30">
              Last Name<span>*</span>
            </h4>
            <input
              className="billing-details__input input-small margin-bottom-30"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
        <h4 className="billing-details__subtitle margin-bottom-30">
          Country<span>*</span>
        </h4>
        <input
          className="billing-details__input margin-bottom-30"
          type="text"
        />
        <h4 className="billing-details__subtitle margin-bottom-30">
          Address<span>*</span>
        </h4>
        <input
          className="billing-details__input margin-bottom-30"
          type="text"
          placeholder="Street Address"
        />
        <input
          className="billing-details__input margin-bottom-30"
          type="text"
          placeholder="Apartment, suite, unite ect (optinal)"
        />
        <h4 className="billing-details__subtitle margin-bottom-30">
          Town/City<span>*</span>
        </h4>
        <input
          className="billing-details__input margin-bottom-30"
          type="text"
        />
        <h4 className="billing-details__subtitle margin-bottom-30">
          Country/State<span>*</span>
        </h4>
        <input
          className="billing-details__input margin-bottom-30"
          type="text"
        />
        <h4 className="billing-details__subtitle margin-bottom-30">
          Postcode / ZIP<span>*</span>
        </h4>
        <input
          className="billing-details__input margin-bottom-30"
          type="number"
        />
        <div className="display-flex flex-space-between">
          <div>
            <h4 className="billing-details__subtitle margin-bottom-30">
              Phone<span>*</span>
            </h4>
            <input
              className="billing-details__input input-small margin-bottom-30"
              type="tel"
              name=""
              id=""
            />
          </div>
          <div>
            <h4 className="billing-details__subtitle margin-bottom-30">
              Email<span>*</span>
            </h4>
            <input
              className="billing-details__input input-small margin-bottom-30"
              type="email"
              name=""
              id=""
            />
          </div>
        </div>
      </div>
      <div className="your-order">
        <h3 className="your-order__title border-bottom">Your Order</h3>
        <div className="display-flex flex-space-between padding-28">
          <h4 className="your-order__subtitle">Products</h4>
          <h4 className="your-order__subtitle">Total</h4>
        </div>
        <div className="display-flex flex-space-between">
          <span className="your-order__item">Leather shopper bag</span>
          <span className="your-order__item">$75.99</span>
        </div>
        <div className="display-flex flex-space-between">
          <span className="your-order__item">Pocket linen shirt</span>
          <span className="your-order__item">$151.99</span>
        </div>
        <div className="display-flex flex-space-between">
          <span className="your-order__item">Buckle wrap skirt</span>
          <span className="your-order__item">$53.99</span>
        </div>

        <div className="display-flex flex-space-between padding-22 border-bottom border-top">
          <h4 className="your-order__subtitle">Subtotal</h4>
          <span className="your-order__subtitle">$750.99</span>
        </div>
        <div className="display-flex flex-space-between padding-18 border-bottom">
          <h4 className="your-order__subtitle">Total</h4>
          <span className="your-order__subtitle color-red">$750.99</span>
        </div>
        <div className="padding-18">
          <input type="checkbox" name="" id="createNewAccount" />
          <label htmlFor="createNewAccount">Create an account?</label>
        </div>
        <p className="your-order__text padding-18">
          Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="your-order__button">Place Order</div>
      </div>
    </section>
  );
};

export default CheckOut;
