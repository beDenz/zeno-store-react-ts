import React, { ReactElement } from "react";
import "./instagram.scss";

const Instagram: React.FC = (): ReactElement => {
  return (
    <section className="instagram container margin-center">
      <h3 className="instagram__title">Follow Instagram</h3>
      <p className="instagram__nickname">@Zano.Furniture</p>
      <div className="instagram__images display-flex ">
        <div className="instagram__image">
          <img src="" alt="" />
        </div>
        <div className="instagram__image">
          <img src="" alt="" />
        </div>
        <div className="instagram__image">
          <img src="" alt="" />
        </div>
        <div className="instagram__image">
          <img src="" alt="" />
        </div>
        <div className="instagram__image">
          <img src="" alt="" />
        </div>
        <div className="instagram__image">
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Instagram;
