import React, { useState, useContext } from "react";
import "./count.scss";
import { ShoppingCartContext } from "../../../service/cart";

interface CountConfig {
  id: string;
}

const Count: React.FC<CountConfig> = ({ id }): JSX.Element => {
  const shoppingCartState = useContext(ShoppingCartContext);

  let count: number = shoppingCartState.state.filter(
    (item: { id: string; price: number; count: number }) => item.id === id
  )[0].count;

  return (
    <div className="count display-flex flex-space-between align-center">
      <div
        className="count__operator display-flex align-center flex-justify-content-center"
        onClick={() =>
          count > 0
            ? shoppingCartState.dispatch({ type: "countMinus", payload: id })
            : null
        }
      >
        -
      </div>
      <div className="count__value">{count}</div>
      <div
        className="count__operator display-flex align-center flex-justify-content-center"
        onClick={() =>
          shoppingCartState.dispatch({ type: "countPlus", payload: id })
        }
      >
        +
      </div>
    </div>
  );
};

export default Count;
