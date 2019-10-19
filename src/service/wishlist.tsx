import React, { useReducer } from "react";
import { ProductItemsConfig } from "../service/dataBaseState";

const initialState: ProductItemsConfig[] = [];

interface ActionConfig {
  type: string;
  payload?: any;
}

const reducer = (
  state: ProductItemsConfig[],
  action: ActionConfig
): ProductItemsConfig[] => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

export const WishListItemContext = React.createContext<
  ProductItemsConfig[] | any
>(initialState);

export const WishListItemProvider: React.FC = ({ children }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <WishListItemContext.Provider value={{ state, dispatch }}>
      {children}
    </WishListItemContext.Provider>
  );
};
