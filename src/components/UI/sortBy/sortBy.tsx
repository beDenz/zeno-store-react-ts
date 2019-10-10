import React, { ReactElement, Fragment } from "react";
import "./sortBy.scss";

const SortBy: React.FC = (): ReactElement => {
  return (
    <Fragment>
      <div className="sortBy ">
        <span className="sortBy__title">Sort By</span>
        <select className="sortBy__select" name="sortBy" id="sortBy">
          <option value="value1">Фильтр 1</option>
          <option value="value2">Фильтр 2</option>
          <option value="value3">Фильтр 3</option>
        </select>
      </div>
    </Fragment>
  );
};

export default SortBy;
