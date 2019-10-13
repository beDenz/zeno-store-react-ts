import React, { ReactElement, useContext } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../../service/cart";

const Header: React.FC = (): ReactElement => {
  const shoppingCartState = useContext(ShoppingCartContext);
  return (
    <header className="header container margin-center">
      <nav className="nav display-flex align-center flex-space-between">
        <div>
          <img src="img/Icon.svg" alt="" />
        </div>
        <div>
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
        </div>
        <div>
          <div className="display-flex">
            <input
              className="nav__search"
              type="text"
              placeholder="Start Searching  . . . . "
              name=""
              id=""
            />
            <span className="nav__icon elegant-icon">&#x55;</span>
            <Link to="/wishlist">
              <span className="nav__icon elegant-icon">&#xe030;</span>
            </Link>
            <Link to="/shopingcart">
              <span className="nav__icon elegant-icon">&#xe013;</span>
            </Link>
            <div className="cart">
              <Link to="/shopingcart">
                <span className="cart__title">Cart: </span>
                <span className="cart__price">
                  {shoppingCartState.state.length > 0
                    ? shoppingCartState.state
                        .reduce(
                          (
                            acc: number,
                            value: { id: string; price: number }
                          ) => {
                            return acc + value.price;
                          },
                          0
                        )
                        .toFixed(2)
                    : 0}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
