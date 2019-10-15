// стейт для хранения цифры резултята всех фильтров

import React, { useReducer } from "react";

interface ResultFilterConfig {
  resultFilter: number;
}

const initialState: ResultFilterConfig = {
  resultFilter: 0
};

interface ActionConfig {
  type: string;
  payload?: any;
}

const reducer = (
  state: ResultFilterConfig,
  action: ActionConfig
): ResultFilterConfig => {
  switch (action.type) {
    case "add":
      return state.resultFilter !== action.payload
        ? { resultFilter: action.payload }
        : state;
    default:
      return { ...state, [action.type]: action.payload };
  }
};

export const ResultFilterContext = React.createContext<
  ResultFilterConfig | any
>(initialState);

export const ResultFilterProvider: React.FC = ({ children }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ResultFilterContext.Provider value={{ state, dispatch }}>
      {children}
    </ResultFilterContext.Provider>
  );
};
