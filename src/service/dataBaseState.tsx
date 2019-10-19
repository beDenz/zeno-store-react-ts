import React, { useReducer } from "react";
import axios from "axios";

const URL: string = process.env.REACT_APP_URL_DB as string;

export interface ProductItemsConfig {
  id: string;
  category: string;
  title: string;
  sku: string;
  price: number;
  oldprice: number;
  description: string;
  waight: number;
  available: number;
  demention: string;
  score: number;
  color?: string;
  review: {
    name: string;
    score: number;
    text: string;
  }[];
}

const getProductsList = async () => {
  const data: any = await axios.get(`${URL}/productList.json`);
  return Object.keys(data.data).map(key => {
    return { ...data.data[key] };
  });
};

const initialState: ProductItemsConfig[] = [];

interface ActionConfig {
  type: string;
  payload?: any;
  item?: ProductItemsConfig;
}
const productsListReducer = (
  state: ProductItemsConfig[],
  action: ActionConfig
): ProductItemsConfig[] => {
  switch (action.type) {
    case "add":
      //return [...state, action.payload];
      return state.concat(action.payload);
    case "error":
      return state;
    case "delete":
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};
/*
interface ProductsListContextConfig {
  productListState: any;
  productsListDispatch: any;
  getProductsList: any;
}
*/
export const ProductsListContext: any = React.createContext({
  initialState
}); // TODO: разобраться с типами вызова метода createContext

export const ProductsListProvider: React.FC = ({ children }): JSX.Element => {
  const [productListState, productsListDispatch] = useReducer(
    productsListReducer,
    initialState
  );

  return (
    <ProductsListContext.Provider
      value={{ productListState, productsListDispatch, getProductsList }}
    >
      {children}
    </ProductsListContext.Provider>
  );
};
