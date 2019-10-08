import React, { ReactElement } from "react";
import "./benefit.scss";

const Benefit: React.FC = (): ReactElement => {
  return (
    <section className="benefit">
      <div className="container-small margin-center display-flex flex-justify-space-around">
        <div className="benefit__item display-flex align-center">
          <div className="benefit__image">
            <img src="image/aboutus/Icon_delivery.png" alt="" />
          </div>
          <div>
            <h3 className="benefit__title">Free Delivery</h3>
            <p className="benefit__text">For all order over 99$</p>
          </div>
        </div>
        <div className="benefit__item display-flex align-center">
          <div className="benefit__image">
            <img src="image/aboutus/Icon_return.png" alt="" />
          </div>
          <div>
            <h3 className="benefit__title">30 Days Return</h3>
            <p className="benefit__text">If goods have Problems</p>
          </div>
        </div>
        <div className="benefit__item display-flex align-center">
          <div className="benefit__image">
            <img src="image/aboutus/icon_wallet.png" alt="" />
          </div>
          <div>
            <h3 className="benefit__title">Secure Payment</h3>
            <p className="benefit__text">100% secure payment</p>
          </div>
        </div>
        <div className="benefit__item display-flex align-center">
          <div className="benefit__image">
            <img src="image/aboutus/Icon_support.png" alt="" />
          </div>
          <div>
            <h3 className="benefit__title">24/7 Support</h3>
            <p className="benefit__text">Dedicated support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
