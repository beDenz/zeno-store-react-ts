import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import "./breadcrumb.scss";
interface BreadcrumbConfig {
  title: string[];
}
const Breadcrumb: React.FC<BreadcrumbConfig> = ({ title }): ReactElement => {
  const titlelength = title.length - 1;

  return (
    <div className="breadcrumb">
      {title.map((item: string, index: number) =>
        index < titlelength ? (
          <span key={index} className="breadcrumb__home">
            <Link to={"/" + item}>{item}</Link>
            {` - `}
          </span>
        ) : (
          <span key={index} className="breadcrumb__thisPage">{`${item}`}</span>
        )
      )}
    </div>
  );
};

export default Breadcrumb;
