import React, { useContext } from "react";
import classnames from "classnames";
import { sliderContext, SLiderItemConfig } from "../sliderStore";

declare module "react" {
  interface HTMLAttributes<T> {
    slideid?: number;
  }
}

interface SLideConfig {
  item: SLiderItemConfig;
  slideid: number;
}

const Slide: React.FC<SLideConfig> = ({ item, slideid }): JSX.Element => {
  const sliderStore = useContext(sliderContext);
  return (
    <div
      className={classnames(
        "slide display-flex flex-space-between align-center",
        {
          centerPosition: slideid === sliderStore.sliderConfigState.currentSlide
        },

        {
          leftPosition:
            (slideid !== sliderStore.sliderConfigState.currentSlide &&
              slideid === sliderStore.state.length - 1 &&
              sliderStore.sliderConfigState.currentSlide === 0) ||
            (sliderStore.sliderConfigState.currentSlide ===
              sliderStore.state.length - 1 &&
              slideid < sliderStore.sliderConfigState.currentSlide &&
              slideid !== 0) ||
            (sliderStore.sliderConfigState.currentSlide !==
              sliderStore.state.length - 1 &&
              slideid < sliderStore.sliderConfigState.currentSlide)
        },
        {
          rightPosition:
            (slideid !== sliderStore.sliderConfigState.currentSlide &&
              slideid === 0 &&
              sliderStore.sliderConfigState.currentSlide ===
                sliderStore.state.length - 1) ||
            (sliderStore.sliderConfigState.currentSlide === 0 &&
              slideid > sliderStore.sliderConfigState.currentSlide &&
              slideid !== sliderStore.state.length - 1) ||
            (sliderStore.sliderConfigState.currentSlide !== 0 &&
              slideid > sliderStore.sliderConfigState.currentSlide)
        }
      )}
      slideid={slideid}
    >
      <div className="slide__description">
        <span className="slide__hashtag">#{item.hashtag}</span>
        <h3 className="slide__title">{item.title}</h3>
        <p className="slide__text">{item.text}</p>
        <div className="slide__button align-center">
          Shop Now<span className="elegant-icon">&#x24;</span>
        </div>
      </div>
      <div className="slide__image">
        <img src={`image/${item.id}.jpg`} alt="" />
      </div>
    </div>
  );
};

export default Slide;
