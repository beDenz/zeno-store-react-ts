import React, { useReducer } from "react";
import { ProductItemsConfig } from "../api/api";

const initialState: ProductItemsConfig[] = [];

interface ActionConfig {
  type: string;
  payload?: any;
  item?: ProductItemsConfig;
}

const reducer = (
  state: ProductItemsConfig[],
  action: ActionConfig
): ProductItemsConfig[] => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    default:
      return state;
  }
};

export const ShoppingCartContext = React.createContext<
  ProductItemsConfig[] | any
>(initialState);

export const ShoppingCartProvider: React.FC = ({ children }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ShoppingCartContext.Provider value={{ state, dispatch }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
