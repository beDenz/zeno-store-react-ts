import React, { useReducer } from "react";
import { ProductItemsConfig } from "../service/dataBaseState";

interface ShoppingCartConfig {
  id: string;
  price: number;
  count: number;
}

const initialState: ShoppingCartConfig[] = [];

interface ActionConfig {
  type: string;
  payload?: any;
  item?: ProductItemsConfig;
}

const reducer = (
  state: ShoppingCartConfig[],
  action: ActionConfig
): ShoppingCartConfig[] => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "countPlus":
      return state.map((item: ShoppingCartConfig) => {
        if (item.id === action.payload) {
          item.count++;
          return { ...item };
        }
        return item;
        //  почему не работает следующие выражение
        //item.id === action.payload ? { ...item, item.count: item.count+1  } : { ...item }
      });

    case "countMinus":
      return state.map((item: ShoppingCartConfig) => {
        if (item.id === action.payload) {
          //  item.count > 0 ? item.count-- : item.count; /// тоже не рабоает?
          item.count--;
          return { ...item };
        }
        return item;
      });
    case "delete":
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

export const ShoppingCartContext = React.createContext<
  ShoppingCartConfig[] | any
>(initialState);

export const ShoppingCartProvider: React.FC = ({ children }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ShoppingCartContext.Provider value={{ state, dispatch }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
