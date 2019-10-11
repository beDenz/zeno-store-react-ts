import React, { ReactElement, Fragment } from "react";
import "./shopFilterResult.scss";

interface ShopFilterResultConfig {
  filterResult: number;
}

const ShopFilterResult: React.FC<ShopFilterResultConfig> = ({
  filterResult
}): ReactElement => {
  return (
    <Fragment>
      <div className="shop-search-result">
        <span className="shop-search-result__result">{filterResult}</span>
        <span className="shop-search-result__text">Products found</span>
      </div>
    </Fragment>
  );
};

export default ShopFilterResult;
