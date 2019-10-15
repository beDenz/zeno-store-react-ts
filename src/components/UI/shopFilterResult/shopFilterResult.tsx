import React, { useContext } from "react";
import { ResultFilterContext } from "../../../service/filterresult";
import "./shopFilterResult.scss";

interface ShopFilterResultConfig {}

const ShopFilterResult: React.FC<ShopFilterResultConfig> = (): JSX.Element => {
  const ResultFilterState = useContext(ResultFilterContext);
  return (
    <div className="shop-search-result">
      <span className="shop-search-result__result">
        {ResultFilterState.state.resultFilter}
      </span>
      <span className="shop-search-result__text">Products found</span>
    </div>
  );
};

export default ShopFilterResult;
