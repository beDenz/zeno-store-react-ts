import React, { ReactElement } from "react";
import "./pagetitle.scss";

interface PropsConfig {
  title?: string | undefined;
}

const Pagetitle: React.FC<PropsConfig> = props => {
  return (
    <h1 className="page-title margin-center">
      {props.title !== undefined
        ? props.title.charAt(0).toUpperCase() + props.title.substring(1)
        : ""}
    </h1>
  );
};

export default Pagetitle;
