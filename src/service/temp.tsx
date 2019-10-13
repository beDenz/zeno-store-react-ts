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
*/

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
