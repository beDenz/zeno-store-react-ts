import React, { ReactElement } from "react";
import "./instagram.scss";

const Instagram: React.FC = (): ReactElement => {
  return (
    <section className="instagram container margin-center margin-top-30 margin-bottom-30">
      <h3 className="instagram__title">Follow Instagram</h3>
      <p className="instagram__nickname margin-bottom-30">@Zano.Furniture</p>
      <div className="instagram__images display-flex flex-justify-content-center ">
        <div className="instagram__image">
          <img src="image/instagram/1.jpg" alt="" />
        </div>
        <div className="instagram__image">
          <img src="image/instagram/2.jpg" alt="" />
        </div>
        <div className="instagram__image">
          <img src="image/instagram/3.jpg" alt="" />
        </div>
        <div className="instagram__image">
          <img src="image/instagram/4.jpg" alt="" />
        </div>
        <div className="instagram__image">
          <img src="image/instagram/5.jpg" alt="" />
        </div>
        <div className="instagram__image">
          <img src="image/instagram/6.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Instagram;
