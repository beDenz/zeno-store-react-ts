import React, { useReducer } from "react";
import axios from "axios";

const URL: string = process.env.REACT_APP_URL_DB as string;

export interface blogPostConfig {
  authorName: string;
  path: string;
  date: string;
  title: string;
  text: string;
}

const getBlogsList = async () => {
  const data: any = await axios.get(`${URL}/blogsList.json`);
  return Object.keys(data.data).map(key => {
    return { ...data.data[key] };
  });
};

const initialState: blogPostConfig[] = [];

interface ActionConfig {
  type: string;
  payload?: any;
  item?: blogPostConfig;
}
const blogsListReducer = (
  state: blogPostConfig[],
  action: ActionConfig
): blogPostConfig[] => {
  switch (action.type) {
    case "add":
      return state.concat(action.payload);
    case "error":
      return state;
    // case "delete":
    //   return state.filter(item => item.id !== action.payload.id);
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
export const BlogsListContext: any = React.createContext({
  initialState
}); // TODO: разобраться с типами вызова метода createContext

export const BlogsListProvider: React.FC = ({ children }): JSX.Element => {
  const [blogsListState, blogsListDispatch] = useReducer(
    blogsListReducer,
    initialState
  );

  return (
    <BlogsListContext.Provider
      value={{ blogsListState, blogsListDispatch, getBlogsList }}
    >
      {children}
    </BlogsListContext.Provider>
  );
};
