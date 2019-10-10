import React, { ReactElement, Fragment } from "react";
import "./shopFilterResult.scss";

const ShopFilterResult: React.FC = (): ReactElement => {
  return (
    <Fragment>
      <div className="shop-search-result">
        <span className="shop-search-result__result">12</span>
        <span className="shop-search-result__text">Products found</span>
      </div>
    </Fragment>
  );
};

export default ShopFilterResult;
