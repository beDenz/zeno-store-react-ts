import React from "react";

const AuthorBlock: React.FC = (): JSX.Element => {
  return (
    <div className="blog-detail__author display-flex align-center">
      <div className="blog-detail__author-image"></div>
      <div className="blog-detail__author-inner">
        <h4 className="blog-detail__author-name">Laura Green</h4>
        <span className="blog-detail__author-skill">Designer</span>
      </div>
    </div>
  );
};

export default AuthorBlock;
