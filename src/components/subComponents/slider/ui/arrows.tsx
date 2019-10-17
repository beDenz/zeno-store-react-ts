import React from "react";

interface LeftArrowConfig {
  onClick: (e: React.MouseEvent) => void;
}

interface RightArrowConfig {
  onClick: (e: React.MouseEvent) => void;
}

export const LeftArrow: React.FC<LeftArrowConfig> = ({
  onClick
}): JSX.Element => {
  return (
    <div className="slider__arrow left elegant-icon" onClick={onClick}>
      &#x34;
    </div>
  );
};

export const RightArrow: React.FC<RightArrowConfig> = ({
  onClick
}): JSX.Element => {
  return (
    <div className="slider__arrow right elegant-icon" onClick={onClick}>
      &#x35;
    </div>
  );
};
