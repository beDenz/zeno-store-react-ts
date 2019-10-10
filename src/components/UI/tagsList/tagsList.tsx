import React, { ReactElement } from "react";
import "./tagsList.scss";

const TagsList: React.FC = (): ReactElement => {
  return (
    <div className="tags-list">
      <h3 className="tags-list__title">Categories</h3>
      <ul>
        <li className="tags-list__item">All</li>
        <li className="tags-list__item">Lighting</li>
        <li className="tags-list__item">Decor</li>
        <li className="tags-list__item">Furniture</li>
        <li className="tags-list__item">Chair</li>
        <li className="tags-list__item">Textiles</li>
        <li className="tags-list__item">Trending</li>
      </ul>
    </div>
  );
};

export default TagsList;
