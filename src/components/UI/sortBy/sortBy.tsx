import React from "react";
import "./sortBy.scss";

const SortBy: React.FC = (): JSX.Element => {
  return (
    <div className="sortBy ">
      <span className="sortBy__title">Sort By</span>
      <select className="sortBy__select" name="sortBy" id="sortBy">
        <option value="value1">Default</option>
        <option value="value2">Sort by price, min to hight</option>
        <option value="value3">Sort by price, hight to min</option>
        <option value="value3">Sort by name</option>
      </select>
    </div>
  );
};

export default SortBy;
