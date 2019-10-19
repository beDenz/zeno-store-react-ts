import React, { ReactElement } from "react";
import "./pagetitle.scss";

interface PropsConfig {
  title?: string[] | undefined;
}

const Pagetitle: React.FC<PropsConfig> = ({ title }): ReactElement => {
  return (
    <h1 className="page-title margin-center">
      {title !== undefined
        ? title[0].charAt(0).toUpperCase() + title[0].substring(1)
        : null}
    </h1>
  );
};

export default Pagetitle;
