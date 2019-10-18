import React, { ReactElement, useContext } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../../service/cart";
import { WishListItemContext } from "../../../service/wishlist";
import classnames from "classnames";

const Header: React.FC = (): ReactElement => {
  const shoppingCartState = useContext(ShoppingCartContext);
  const WishListItemState = useContext(WishListItemContext);

  return (
    <header className="header container margin-center">
      <nav className="nav display-flex align-center flex-space-between">
        <div className="logo">
          <h1 className="logo__title margin-center">Zano</h1>
        </div>
        <ul className="menu display-flex">
          <li className="menu__item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu__item">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="menu__item">
            <Link to="/faqs">faqs</Link>
          </li>
          <li className="menu__item">
            <Link to="/blog">blog</Link>
          </li>
          <li className="menu__item">
            <Link to="/contact">contact</Link>
          </li>
        </ul>
        <div className="display-flex align-center">
          <input
            className="nav__search"
            type="text"
            placeholder="Start Searching  . . . . "
            name=""
            id=""
          />
          <div className="nav__icon-wrapper">
            <span className="nav__icon elegant-icon">&#x55;</span>
          </div>
          <Link to="/wishlist">
            <div className="nav__icon-wrapper">
              <span className="nav__icon elegant-icon">&#xe030;</span>
              <div
                className={classnames(
                  {
                    "nav__icon-num display-flex align-center flex-justify-content-center":
                      WishListItemState.state.length > 0
                  },
                  {
                    displayNone:
                      WishListItemState.state.length === 0 || undefined
                  }
                )}
              >
                {WishListItemState.state.length}
              </div>
            </div>
          </Link>
          <Link to="/shoppingcart">
            <div className="nav__icon-wrapper">
              <span className="nav__icon elegant-icon">&#xe013;</span>
              <div
                className={classnames(
                  {
                    "nav__icon-num display-flex align-center flex-justify-content-center":
                      shoppingCartState.state.length > 0
                  },
                  {
                    displayNone:
                      shoppingCartState.state.length === 0 || undefined
                  }
                )}
              >
                {shoppingCartState.state.length}
              </div>
            </div>
          </Link>
          <div className="cart">
            <Link to="/shoppingcart">
              <span className="cart__title">Cart: </span>
              <span className="cart__price">
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
            </Link>
          </div>
          <span className="nav__mobile-button elegant-icon">&#x61;</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
