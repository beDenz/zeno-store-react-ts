import React, { ReactElement } from "react";

const BlogItem: React.FC = (): ReactElement => {
  return (
    <div className="blog__item margin-bottom-30">
      <div className="blog__item-description">
        <span className="blog__icon">&#xe023;</span>
        <span className="blog__suptitle">January 14, 2019</span>
        &nbsp;&nbsp;
        <span className="blog__icon">&#xe08a;</span>
        <span className="blog__suptitle">Laura Green</span>
        <h3 className="blog__subtitle">Modern & Contemporary Adult Bedroom</h3>
      </div>
    </div>
  );
};

export default BlogItem;
