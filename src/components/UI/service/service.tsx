import React, { ReactElement } from "react";
import "./service.scss";

const Service: React.FC = (): ReactElement => {
  return (
    <section className="service display-flex flex-justify-content-center">
      <div className="service__item display-flex flex-collum flex-justify-content-center align-center">
        <div>
          <img src="image/sevice__track.png" alt="" />
        </div>
        <h4 className="service__title">Free Shipping</h4>
        <p className="service__description">
          Plus, enjoy speedy 2-day delivery on thousands of items
        </p>
      </div>
      <div className="service__item display-flex flex-collum flex-justify-content-center align-center">
        <div>
          <img src="image/service__deals.png" alt="" />
        </div>
        <h4 className="service__title">Amazing Deals</h4>
        <p className="service__description">
          Daily sales mean you always save (even when you splurge)
        </p>
      </div>
      <div className="service__item display-flex flex-collum flex-justify-content-center align-center">
        <div>
          <img src="image/service__customer.png" alt="" />
        </div>
        <h4 className="service__title">Expert Customer</h4>
        <p className="service__description">
          No robots here! Our friendly team is on hand 7 days a week
        </p>
      </div>
    </section>
  );
};

export default Service;
