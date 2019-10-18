import React, { ReactElement } from "react";
import "./metroGridItems.scss";

const MetroGridItems: React.FC = (): ReactElement => {
  return (
    <section className="metroGridItems margin-top-30 container margin-center">
      <div className="metroGridItems__item item1">
        {
          //<img src="image/item/photo-1555041469-a586c61ea9bc.jpg" alt="" />
        }
        <div className="metroGridItems__description">
          <span className="metroGridItems__hashtag">#new arrivals</span>
          <h3 className="metroGridItems__title">Retrostaf Footstool</h3>
          <div className="metroGridItems__button">
            Shop now <span className="elegant-icon">&#x24;</span>
          </div>
        </div>
      </div>
      <div className="metroGridItems__item item2">
        {
          //<img src="image/item/photo-1545398865-0062dafeb74d.jpg" alt="" />
        }
        <div className="metroGridItems__description">
          <span className="metroGridItems__hashtag">#new arrivals</span>
          <h3 className="metroGridItems__title">Retrostaf Footstool</h3>
          <div className="metroGridItems__button">
            Shop now <span className="elegant-icon">&#x24;</span>
          </div>
        </div>
      </div>
      <div className="metroGridItems__item item3">
        {
          //<img src="image/item/photo-1503602642458-232111445657.jpg" alt="" />
        }
        <div className="metroGridItems__description">
          <span className="metroGridItems__hashtag">#new arrivals</span>
          <h3 className="metroGridItems__title">Retrostaf Footstool</h3>
          <div className="metroGridItems__button">
            Shop now <span className="elegant-icon">&#x24;</span>
          </div>
        </div>
      </div>
      <div className="metroGridItems__item item4">
        {
          //<img src="image/item/photo-1530603907829-659ab5ec057b.jpg" alt="" />
        }
        <div className="metroGridItems__description">
          <span className="metroGridItems__hashtag">#new arrivals</span>
          <h3 className="metroGridItems__title">Retrostaf Footstool</h3>
          <div className="metroGridItems__button">
            Shop now <span className="elegant-icon">&#x24;</span>
          </div>
        </div>
      </div>
      <div className="metroGridItems__item item5">
        {
          //<img src="image/item/photo-1563493461953-aeee5e293b66.jpg" alt="" />
        }
        <div className="metroGridItems__description">
          <span className="metroGridItems__hashtag">#new arrivals</span>
          <h3 className="metroGridItems__title">Retrostaf Footstool</h3>
          <div className="metroGridItems__button">
            Shop now <span className="elegant-icon">&#x24;</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetroGridItems;
