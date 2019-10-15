// Стейт для хранения информации о пользователе

import React, { useReducer } from "react";

interface BillingConfig {
  firstName: string;
  lastName: string;
  country: string;
  state: string;
  street: string;
  appart: string;
  city: string;
  postcode: string;
  phone: number;
  email: string;
}

const initialState: BillingConfig = {
  firstName: "",
  lastName: "",
  country: "",
  state: "",
  street: "",
  appart: "",
  city: "",
  postcode: "",
  phone: 0,
  email: ""
};

interface ActionConfig {
  type: string;
  payload?: any;
}

const reducer = (state: BillingConfig, action: ActionConfig): BillingConfig => {
  switch (action.type) {
    case "add":
      return { ...state };
    default:
      return { ...state, [action.type]: action.payload };
  }
};

export const BillingContext = React.createContext<BillingConfig | any>(
  initialState
);

export const BillingProvider: React.FC = ({ children }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BillingContext.Provider value={{ state, dispatch }}>
      {children}
    </BillingContext.Provider>
  );
};
