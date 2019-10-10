import React, { ReactElement } from "react";
import "./priceFilter.scss";

interface PriceFilterConfig {
  priceFilter: { minPrice: number; maxPrice: number };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PriceFilter: React.FC<PriceFilterConfig> = ({
  priceFilter,
  onChange
}): ReactElement => {
  return (
    <div className="priceFilter">
      <h3 className="priceFilter__title">Price</h3>

      <form className="display-flex flex-space-between align-center">
        <input
          className="priceFilter__input"
          type="text"
          placeholder="Min price"
          maxLength={10}
          value={priceFilter.minPrice}
          onChange={onChange}
          id="minprice"
        />
        <span>-</span>
        <input
          className="priceFilter__input"
          type="text"
          placeholder="Max price"
          maxLength={10}
          value={priceFilter.maxPrice}
          onChange={onChange}
          id="maxprice"
        />
      </form>
    </div>
  );
};

export default PriceFilter;
