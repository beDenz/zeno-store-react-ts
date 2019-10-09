import React, { ReactElement } from "react";
import "./dealOfTheDay.scss";

const DealOfTheDay: React.FC = (): ReactElement => {
  return (
    <section className="dealOfTheDay display-flex container margin-center">
      <div className="dealOfTheDay__image1"></div>
      <div className="dealOfTheDay__image2"></div>
      <div className="dealOfTheDay__inner">
        <div className="dealOfTheDay__deal display-flex flex-justify-content-center align-center flex-collum">
          <span className="dealOfTheDay__hashtag">#Manor.Furniture</span>
          <h3 className="dealOfTheDay__title">Deal of The Week</h3>
          <div className="timer display-flex">
            <div className="timer__item display-flex flex-collum flex-justify-content-center align-center">
              <span className="timer__number">22</span>
              <span className="timer__title">Days</span>
            </div>
            <div className="timer__item display-flex flex-collum flex-justify-content-center align-center">
              <span className="timer__number">18</span>
              <span className="timer__title">Hours</span>
            </div>
            <div className="timer__item display-flex flex-collum flex-justify-content-center align-center">
              <span className="timer__number">46</span>
              <span className="timer__title">Minutes</span>
            </div>
            <div className="timer__item display-flex flex-collum flex-justify-content-center align-center">
              <span className="timer__number">32</span>
              <span className="timer__title">Seconds</span>
            </div>
          </div>
          <div className="dealOfTheDay__btn display-flex flex-justify-content-center align-center">
            Shop now
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealOfTheDay;
