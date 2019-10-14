import React, {
  useContext,
  createContext,
  useReducer,
  ReactElement,
  Component
} from "react";
import { productsList, ProductItemsConfig } from "../api/api";
/*
interface initialStateConfig {
  id: string;
}
const initialState: initialStateConfig = {
  id: "One"
};

interface ActionConfig {
  type: string;
  payload: any;
}

function reducer(
  state: initialStateConfig,
  action: ActionConfig
): initialStateConfig | undefined {
  switch (action.type) {
    case "one":
      return state;
    default:
      return state;
  }
}

const [state, dispatch] = useReducer(reducer, initialState);

/*
interface initialStateConfig {
  id: string;
}

const initialState: initialStateConfig = {
  id: "One"
};

interface ActionConfig {
  type: string;
  payload: any;
}

function reducer(
  state: initialStateConfig,
  action: ActionConfig
): initialStateConfig {
  switch (action.type) {
    case "one":
      return state;
    default:
      return state;
  }
}

const [state, dispatch] = useReducer(reducer, initialState);


const initialState: ProductItemsConfig[] = [];

interface ActionConfig {
  type: string;
  payload: any;
}

function reducer(
  state: ProductItemsConfig[],
  action: ActionConfig
): ProductItemsConfig[] {
  switch (action.type) {
    case "one":
      return state;
    default:
      return state;
  }
}

const [state, dispatch] = useReducer(reducer, initialState);

const arr = [
  { name: "John", age: 92 },
  { name: "Dave", age: 42 },
  { name: "Justin", age: 3 }
];

const propComparator = (propName: any) => (a: any, b: any) =>
  a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1;

arr.sort(propComparator("name"));
console.log("By name", arr);

arr.sort(propComparator("age"));
console.log("By age", arr);
////////////////////////

const funcSortProps = (a: ProductItemsConfig, b: ProductItemsConfig): any => (
  type: string
): any => {
  //switch (type) {
  // case "price":
  a.price === b.price ? 0 : a.price > b.price ? 1 : -1;
  //}
};

const funcSortProps = (type) => (a, b) => { 
  switch (type) {

}
}

*/
