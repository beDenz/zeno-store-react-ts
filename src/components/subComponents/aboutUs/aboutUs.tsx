import React, { ReactElement } from "react";
import "./aboutUs";

const AboutUS: React.FC = (): ReactElement => {
  return (
    <div className="aboutus__items display-flex flex-space-between">
      <div className="aboutus__item">
        <div className="aboutus__image">
          <img src="" alt="" />
        </div>
        <div className="aboutus__description">
          <h3 className="aboutus__subtitle">Who We Are</h3>
          <p className="aboutus__text">
            The Zano story begins with a young man from the area of Thy in the
            northwestern part of Iceland – a young man with an exceptional
            talent for business – Michael William.{" "}
          </p>
          <p>
            After completing his apprenticeship in a manufacturing company and
            later in a residential property, Michael William decided he would
            open a chain of bedding stores. The basic idea was to provide all
            customers with a great offer.
          </p>
        </div>
      </div>
      <div className="aboutus__item">
        <div className="aboutus__image">
          <img src="" alt="" />
        </div>
        <div className="aboutus__description">
          <h3 className="aboutus__subtitle">Our Vision</h3>
          <p className="aboutus__text">
            We aim at being one of the best furniture manufactures of storage
            and dining furniture designed with functionality, high quality and
            affordable prices in mind.{" "}
          </p>
          <p>
            We make storage and dining furniture designed with functionality in
            mind. We develop and manufacture funiture of high quality at
            affordable prices for retailers worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};
