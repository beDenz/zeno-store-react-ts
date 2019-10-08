import React, { ReactElement } from "react";
import "./chooseUs.scss";

const ChooseUs: React.FC = (): ReactElement => {
  return (
    <section className="chooseUs container margin-center">
      <h2 className="chooseUs__title">Why Choose Us</h2>
      <div className="chooseUs__inner display-flex container-small flex-space-between margin-center align-center">
        <div className="chooseUs__image">
          <img src="#" alt="" />
        </div>
        <div className="chooseUs__description">
          <div className="chooseUs__item display-flex">
            <div className="chooseUs__item-image">
              <img src="img/aboutus/Icon_delivery.png" alt="" />
            </div>
            <div className="chooseUs__item-description">
              <h3 className="chooseUs__subtitle">Free Delivery</h3>
              <p className="chooseUs__text">
                For all order over 99$. It has been arrived as soon as possible
              </p>
            </div>
          </div>
          <div className="chooseUs__item display-flex">
            <div className="chooseUs__item-image">
              <img src="img/aboutus/Icon_return.png" alt="" />
            </div>
            <div className="chooseUs__item-description">
              <h3 className="chooseUs__subtitle">30 Days Return</h3>
              <p className="chooseUs__text">
                If goods have Problems. It has been achieving great heights so
                far as its popularity
              </p>
            </div>
          </div>
          <div className="chooseUs__item display-flex">
            <div className="chooseUs__item-image">
              <img src="img/aboutus/Icon_support.png" alt="" />
            </div>
            <div className="chooseUs__item-description">
              <h3 className="chooseUs__subtitle">24/7 Support</h3>
              <p className="chooseUs__text">
                If goods have Problems. It has been achieving great heights so
                far as its popularity
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
