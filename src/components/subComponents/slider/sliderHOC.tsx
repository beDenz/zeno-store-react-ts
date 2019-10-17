import React from "react";
import { SliderProvider } from "./sliderStore";
import Slider from "./slider";

export const SliderHOC: React.FC = ({ children }): JSX.Element => {
  return (
    <SliderProvider>
      <Slider />
    </SliderProvider>
  );
};
