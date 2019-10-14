import React, { ReactElement, Fragment, useContext } from "react";
import "./shoppingCart.scss";
import Pagetitle from "../UI/pageTitle/pagetitle";
import { ShoppingCartContext } from "../../service/cart";
import ShoppingCartItem from "../subComponents/shoppingcartitem";
import { productsList, ProductItemsConfig } from "../../api/api";

const ShoppingCart: React.FC = (): ReactElement => {
  const shoppingCartState = useContext(ShoppingCartContext);
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

        {shoppingCartState.state.map(
          (itemMap: { id: string; price: number }, index: number) => {
            const temp = productsList.filter(
              (itemFilter: ProductItemsConfig) => itemFilter.id === itemMap.id
            );
            return <ShoppingCartItem key={index} item={temp[0]} />;
          }
        )}

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
              <div className="totalPrice__price">
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
              </div>
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

export default ShoppingCart;
