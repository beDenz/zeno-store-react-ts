import React, { useContext } from "react";
import "./checkOut.scss";
import { productsList, ProductItemsConfig } from "../../api/api";
import { ShoppingCartContext } from "../../service/cart";
import { BillingContext } from "../../service/billing";

const CheckOut: React.FC = (): JSX.Element => {
  const shoppingCartState = useContext(ShoppingCartContext);
  const billingState = useContext(BillingContext);
  console.log(billingState.state);
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                billingState.dispatch({
                  type: "firstName",
                  payload: e.target.value
                })
              }
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                billingState.dispatch({
                  type: "lastName",
                  payload: e.target.value
                })
              }
            />
          </div>
        </div>
        <h4 className="billing-details__subtitle margin-bottom-30">
          Country<span>*</span>
        </h4>
        <input
          className="billing-details__input margin-bottom-30"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            billingState.dispatch({
              type: "country",
              payload: e.target.value
            })
          }
        />
        <h4 className="billing-details__subtitle margin-bottom-30">
          Address<span>*</span>
        </h4>
        <input
          className="billing-details__input margin-bottom-30"
          type="text"
          placeholder="Street Address"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            billingState.dispatch({
              type: "street",
              payload: e.target.value
            })
          }
        />
        <input
          className="billing-details__input margin-bottom-30"
          type="text"
          placeholder="Apartment, suite, unite ect (optinal)"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            billingState.dispatch({
              type: "appart",
              payload: e.target.value
            })
          }
        />
        <h4 className="billing-details__subtitle margin-bottom-30">
          Town/City<span>*</span>
        </h4>
        <input
          className="billing-details__input margin-bottom-30"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            billingState.dispatch({
              type: "city",
              payload: e.target.value
            })
          }
        />
        <h4 className="billing-details__subtitle margin-bottom-30">
          Country/State<span>*</span>
        </h4>
        <input
          className="billing-details__input margin-bottom-30"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            billingState.dispatch({
              type: "Country",
              payload: e.target.value
            })
          }
        />
        <h4 className="billing-details__subtitle margin-bottom-30">
          Postcode / ZIP<span>*</span>
        </h4>
        <input
          className="billing-details__input margin-bottom-30"
          type="number"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            billingState.dispatch({
              type: "postcode",
              payload: e.target.value
            })
          }
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                billingState.dispatch({
                  type: "phone",
                  payload: e.target.value
                })
              }
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                billingState.dispatch({
                  type: "email",
                  payload: e.target.value
                })
              }
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

        {shoppingCartState.state.map(
          (itemMap: { id: string; price: number }, index: number) => {
            const item = productsList.filter(
              (itemFilter: ProductItemsConfig) => itemFilter.id === itemMap.id
            )[0];
            return (
              <div key={index} className="display-flex flex-space-between">
                <span className="your-order__item">{item.title}</span>
                <span className="your-order__item">${item.price}</span>
              </div>
            );
          }
        )}

        <div className="display-flex flex-space-between padding-22 border-bottom border-top">
          <h4 className="your-order__subtitle">Subtotal</h4>
          <span className="your-order__subtitle">
            {shoppingCartState.state.length > 0
              ? "$" +
                shoppingCartState.state
                  .reduce(
                    (acc: number, value: { id: string; price: number }) => {
                      return acc + value.price;
                    },
                    0
                  )
                  .toFixed(2)
              : "$0"}
          </span>
        </div>
        <div className="display-flex flex-space-between padding-18 border-bottom">
          <h4 className="your-order__subtitle">Total</h4>
          <span className="your-order__subtitle color-red">
            {shoppingCartState.state.length > 0
              ? "$" +
                shoppingCartState.state
                  .reduce(
                    (acc: number, value: { id: string; price: number }) => {
                      return acc + value.price;
                    },
                    0
                  )
                  .toFixed(2)
              : "$0"}
          </span>
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
