import React, { ReactElement } from "react";
import "./header.scss";

const Header: React.FC = (): ReactElement => {
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
            <li className="menu__item">Home</li>
            <li className="menu__item">pages</li>
            <li className="menu__item">portfolio</li>
            <li className="menu__item">shop</li>
            <li className="menu__item">blog</li>
            <li className="menu__item">contact</li>
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
            <span className="nav__icon elegant-icon">&#xe030;</span>
            <span className="nav__icon elegant-icon">&#xe013;</span>
            <div className="cart">
              <span className="cart__title">Cart: </span>
              <span className="cart__price">$250</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
