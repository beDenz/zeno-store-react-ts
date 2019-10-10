import React, { ReactElement, Fragment } from "react";
import "./styleViewItems.scss";

const StyleViewItems: React.FC = (): ReactElement => {
  return (
    <Fragment>
      <div className="style-view display-flex align-center">
        <span className="style-view__icon elegant-icon">&#xe08c;</span>
        <span className="style-view__icon elegant-icon">&#x64;</span>
      </div>
    </Fragment>
  );
};

export default StyleViewItems;
