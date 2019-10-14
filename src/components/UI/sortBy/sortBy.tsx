import React from "react";
import "./sortBy.scss";

interface SortByConfig {
  onChange: (e: React.FormEvent<HTMLSelectElement>) => void;
}

const SortBy: React.FC<SortByConfig> = ({ onChange }): JSX.Element => {
  return (
    <div className="sortBy ">
      <span className="sortBy__title">Sort By</span>
      <select
        className="sortBy__select"
        name="sortBy"
        id="sortBy"
        onChange={onChange}
      >
        <option value="default">Default</option>
        <option value="priceMinToHigh">Sort by price, min to hight</option>
        <option value="priceHighToMin">Sort by price, hight to min</option>
      </select>
    </div>
  );
};

export default SortBy;
