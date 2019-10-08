import React, { ReactElement } from "react";
import "./breadcrumb.scss";

const Breadcrumb: React.FC = (): ReactElement => {
  return (
    <div className="breadcrumb">
      <span className="breadcrumb__home">Home</span> -
      <span className="breadcrumb__thisPage">FAQS</span>
    </div>
  );
};

export default Breadcrumb;
