import React from "react";
import { blogPostConfig } from "../../../api/api";
import { Link } from "react-router-dom";

interface BlogItemConfig {
  item: blogPostConfig;
}

const BlogItem: React.FC<BlogItemConfig> = ({ item }): JSX.Element => {
  return (
    <Link to={`/blog/${item.title}`}>
      <div className="blog__item margin-bottom-30">
        <img
          className="blog__item-image"
          src={`image/blog/${item.path}.jpg`}
          alt=""
        />
        <div className="blog__item-description">
          <span className="blog__icon">&#xe023;</span>
          <span className="blog__suptitle">{item.date}</span>
          &nbsp;&nbsp;
          <span className="blog__icon">&#xe08a;</span>
          <span className="blog__suptitle">{item.authorName}</span>
          <h3 className="blog__subtitle">{item.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
