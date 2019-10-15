import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../service/cart";

interface ShoppingCartItemConfig {
  item?: any;
}

const ShoppingCartItem: React.FC<ShoppingCartItemConfig> = ({
  item
}): JSX.Element => {
  const shoppingCartState = useContext(ShoppingCartContext);
  return (
    <div className="shopingCart__row-product display-flex align-center flex-space-between row-border">
      <div className="shopingCart__product display-flex align-center width-50">
        <div className="shopingCart__image">
          <img
            src={`/image/products/${item.category}/${item.id}_1.jpg`}
            alt=""
          />
        </div>
        <h4 className="shopingCart__subtitle">
          <Link to={`/shop/${item.id}`}>{item.title}</Link>
        </h4>
      </div>

      <span className="shopingCart__price">${item.price}</span>

      <div className="count display-flex flex-space-between align-center">
        <div className="count__operator display-flex align-center flex-justify-content-center">
          -
        </div>
        <div className="count__value">1</div>
        <div className="count__operator display-flex align-center flex-justify-content-center">
          +
        </div>
      </div>

      <span className="shopingCart__price">${item.price}</span>
      <span
        className="shopingCart__button elegant-icon"
        onClick={() =>
          shoppingCartState.dispatch({ type: "delete", payload: item })
        }
      >
        &#x4d;
      </span>
    </div>
  );
};

export default ShoppingCartItem;
