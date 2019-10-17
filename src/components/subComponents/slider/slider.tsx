import React, { useContext } from "react";
import "./slider.scss";
import Slide from "./ui/slide";
import { LeftArrow, RightArrow } from "./ui/arrows";
import { sliderContext, SLiderItemConfig } from "./sliderStore";

const Slider: React.FC = (): JSX.Element => {
  const sliderStore = useContext(sliderContext);

  const prevSlide = (e: React.MouseEvent): void => {
    sliderStore.sliderConfigAction({
      type: "prevSlide"
    });
  };
  const nextSlide = (e: React.MouseEvent): void => {
    sliderStore.sliderConfigAction({
      type: "nextSlide"
    });
  };

  return (
    <div className="slider display-flex container margin-center">
      <LeftArrow onClick={prevSlide} />
      <RightArrow onClick={nextSlide} />
      {sliderStore.state.map((item: SLiderItemConfig, index: number) => (
        <Slide key={index} item={item} slideid={+index} />
      ))}
    </div>
  );
};

export default Slider;
