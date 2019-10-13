import React, { ReactElement } from "react";
import "./tagsList.scss";
import { Link } from "react-router-dom";

interface TagsListConfig {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const categoriesList: string[] = [
  "All",
  "Lighting",
  "Decor",
  "Furniture",
  "Chair",
  "Outdoor",
  "Trending"
];

const TagsList: React.FC<TagsListConfig> = ({ onClick }): ReactElement => {
  return (
    <div className="tags-list">
      <h3 className="tags-list__title">Categories</h3>
      <ul>
        {categoriesList.map((item, index) => (
          <li key={index} className="tags-list__item" onClick={onClick}>
            <Link to="/shop">{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagsList;
