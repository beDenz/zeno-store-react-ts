import React, { ReactElement, Fragment } from "react";
import "./styleViewItems.scss";
import classnames from "classnames";

declare module "react" {
  interface HTMLAttributes<T> {
    type?: string;
  }
}

interface StyleViewItemsConfig {
  onClick: (e: React.MouseEvent) => void;
  styleViewState: string | null;
}

const StyleViewItems: React.FC<StyleViewItemsConfig> = ({
  onClick,
  styleViewState
}): ReactElement => {
  return (
    <Fragment>
      <div className="style-view display-flex align-center">
        <span
          //className="style-view__icon elegant-icon active"
          className={classnames("style-view__icon", "elegant-icon", {
            active: styleViewState === "grid"
          })}
          onClick={onClick}
          type="grid"
        >
          &#xe08c;
        </span>
        <span
          //className="style-view__icon elegant-icon"
          className={classnames("style-view__icon", "elegant-icon", {
            active: styleViewState === "list"
          })}
          onClick={onClick}
          type="list"
        >
          &#x64;
        </span>
      </div>
    </Fragment>
  );
};

export default StyleViewItems;
