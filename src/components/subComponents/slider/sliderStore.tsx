import React, { useReducer } from "react";

export interface SLiderItemConfig {
  id: string;
  title: string;
  hashtag: string;
  text: string;
}

const initialState: SLiderItemConfig[] = [
  {
    id: "1",
    title: "Best Designs of Furniture Collections",
    hashtag: "New Arrivals",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."
  },
  {
    id: "1",
    title: "Best Designs of Furniture Collections",
    hashtag: "New Arrivals",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."
  },

  {
    id: "1",
    title: "Best Designs of Furniture Collections",
    hashtag: "New Arrivals",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."
  },
  {
    id: "1",
    title: "Best Designs of Furniture Collections",
    hashtag: "New Arrivals",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."
  }
];

export interface SliderConfigInterface {
  currentSlide: number;
  slideWidth: number;
}

const sliderConfig: SliderConfigInterface = {
  currentSlide: Math.floor(initialState.length / 2),
  slideWidth: 0
};

const sliderConfigReducer = (
  state: SliderConfigInterface,
  action: ActionConfig
): SliderConfigInterface => {
  switch (action.type) {
    case "prevSlide":
      if (state.currentSlide > 0)
        return { ...state, currentSlide: state.currentSlide - 1 };
      else return { ...state, currentSlide: initialState.length - 1 };
    // почему не работают условия вида: 
    //state.currentSlide > 0
    //  ? { slideWidth: 0, currentSlide: state.currentSlide - 1 }
    //  : { slideWidth: 0, currentSlide: initialState.length - 1 };
    case "nextSlide":
      if (state.currentSlide < initialState.length - 1)
        return { ...state, currentSlide: state.currentSlide + 1 };
      else return { ...state, currentSlide: 0 };

    //  state.currentSlide < initialState.length
    //   ? { ...state, currentSlide: state.currentSlide + 1 }
    //  : { ...state, currentSlide: 0 };
    default:
      return state;
  }
};

interface ActionConfig {
  type: string;
  payload?: any;
  item?: SLiderItemConfig;
}

const reducer = (
  state: SLiderItemConfig[],
  action: ActionConfig
): SLiderItemConfig[] => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

export const sliderContext = React.createContext<SLiderItemConfig[] | any>(
  initialState
);

export const SliderProvider: React.FC = ({ children }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [sliderConfigState, sliderConfigAction] = useReducer(
    sliderConfigReducer,
    sliderConfig
  );

  return (
    <sliderContext.Provider
      value={{ state, dispatch, sliderConfigState, sliderConfigAction }}
    >
      {children}
    </sliderContext.Provider>
  );
};
