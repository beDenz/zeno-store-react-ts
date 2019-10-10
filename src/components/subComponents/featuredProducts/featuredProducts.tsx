import React, { ReactElement } from "react";
import "./featuredProducts.scss";

const FeaturedProducts: React.FC = (): ReactElement => {
  return (
    <section className="featured-products container-small margin-center display-flex flex-collum align-center">
      <h3 className="featured-products__title">Featured Products</h3>
      <p className="featured-products__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore
      </p>
      <div className="featured-products__items display-flex flex-space-between">
        <div className="featured-products__item">
          <div className="featured-products__item-image">
            <div className="item-icons">
              <div className="item-icons__icon">&#xe030;</div>
              <div className="item-icons__icon">&#xe013;</div>
            </div>
          </div>
          <div className="featured-products__item-description">
            <h5 className="featured-products__item-title">Small Plate Set</h5>
            <span className="featured-products__item-price">$45.00</span>
          </div>
        </div>
        <div className="featured-products__item">
          <div className="featured-products__item-image">
            <div className="item-icons">
              <div className="item-icons__icon">&#xe030;</div>
              <div className="item-icons__icon">&#xe013;</div>
            </div>
          </div>
          <div className="featured-products__item-description">
            <h5 className="featured-products__item-title">Sierra Nevada</h5>
            <span className="featured-products__item-price">$45.00</span>
          </div>
        </div>
        <div className="featured-products__item">
          <div className="featured-products__item-image">
            <div className="item-icons">
              <div className="item-icons__icon">&#xe030;</div>
              <div className="item-icons__icon">&#xe013;</div>
            </div>
          </div>
          <div className="featured-products__item-description">
            <h5 className="featured-products__item-title">
              Small Form Barstool
            </h5>
            <span className="featured-products__item-price">$28</span>
          </div>
        </div>
        <div className="featured-products__item">
          <div className="featured-products__item-image">
            <div className="item-icons">
              <div className="item-icons__icon">&#xe030;</div>
              <div className="item-icons__icon">&#xe013;</div>
            </div>
          </div>
          <div className="featured-products__item-description">
            <h5 className="featured-products__item-title">Medusa Side Table</h5>
            <span className="featured-products__item-price">$36.00</span>
          </div>
        </div>
        <div className="featured-products__item">
          <div className="featured-products__item-image">
            <div className="item-icons">
              <div className="item-icons__icon">&#xe030;</div>
              <div className="item-icons__icon">&#xe013;</div>
            </div>
          </div>
          <div className="featured-products__item-description">
            <h5 className="featured-products__item-title">Option Chair</h5>
            <span className="featured-products__item-price">$24.00</span>
          </div>
        </div>
        <div className="featured-products__item">
          <div className="featured-products__item-image">
            <div className="item-icons">
              <div className="item-icons__icon">&#xe030;</div>
              <div className="item-icons__icon">&#xe013;</div>
            </div>
          </div>
          <div className="featured-products__item-description">
            <h5 className="featured-products__item-title">
              Baking Dish - Mint
            </h5>
            <span className="featured-products__item-price">$16.00</span>
          </div>
        </div>
        <div className="featured-products__item sale">
          <div className="featured-products__item-image">
            <div className="item-icons">
              <div className="item-icons__icon">&#xe030;</div>
              <div className="item-icons__icon">&#xe013;</div>
            </div>
          </div>
          <div className="featured-products__item-description">
            <h5 className="featured-products__item-title">Ferfera Cushion</h5>
            <span className="featured-products__item-price">$42.00</span>
          </div>
        </div>
        <div className="featured-products__item new">
          <div className="featured-products__item-image">
            <div className="item-icons">
              <div className="item-icons__icon">&#xe030;</div>
              <div className="item-icons__icon">&#xe013;</div>
            </div>
          </div>
          <div className="featured-products__item-description">
            <h5 className="featured-products__item-title">
              Craft Pendant Lamp
            </h5>
            <span className="featured-products__item-price">$51.00</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
