import React, { ReactElement } from "react";
import "./tagsList.scss";

const categoriesStore: string[] = [
  "All",
  "Lighting",
  "Decor",
  "Furniture",
  "Chair",
  "Textiles",
  "Trending"
];

interface TagsListConfig {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const TagsList: React.FC<TagsListConfig> = ({ onClick }): ReactElement => {
  return (
    <div className="tags-list">
      <h3 className="tags-list__title">Categories</h3>
      <ul>
        <li className="tags-list__item" onClick={onClick}>
          All
        </li>
        <li className="tags-list__item" onClick={onClick}>
          Lighting
        </li>
        <li className="tags-list__item" onClick={onClick}>
          Decor
        </li>
        <li className="tags-list__item" onClick={onClick}>
          Furniture
        </li>
        <li className="tags-list__item" onClick={onClick}>
          Chair
        </li>
        <li className="tags-list__item" onClick={onClick}>
          Outdoor
        </li>
        <li className="tags-list__item" onClick={onClick}>
          Trending
        </li>
      </ul>
    </div>
  );
};

export default TagsList;
