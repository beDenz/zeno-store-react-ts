import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../service/cart";
import Count from "../UI/count/count";

interface ShoppingCartItemConfig {
  item?: any;
}

const ShoppingCartItem: React.FC<ShoppingCartItemConfig> = ({
  item
}): JSX.Element => {
  const shoppingCartState = useContext(ShoppingCartContext);

  let count: number = shoppingCartState.state.filter(
    (stateItem: { id: string; price: number; count: number }) =>
      stateItem.id === item.id
  )[0].count;

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

      <Count id={item.id} />

      <span className="shopingCart__price">
        $ {(count * item.price).toFixed(2)}
      </span>
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
