import React, { ReactElement, Fragment } from "react";
import Breadcrumb from "./UI/breadcrumb/breadcrumb";
import Pagetitle from "./UI/pageTitle/pagetitle";
import { blogPost, blogPostConfig } from "../api/api";
import { createBreadcrumb, createTitle } from "../service/utitiles";

interface TitleConfig {
  match: any;
}

const Blog: React.FC<TitleConfig> = ({ match }): ReactElement => {
  return (
    <section className="blog container-small margin-center display-flex flex-collum align-center">
      <div className="text-align-center">
        <Pagetitle title={createTitle(match.url)} />
        <Breadcrumb title={createBreadcrumb(match.url)} />
      </div>
      <div className="blog__items display-flex flex-space-between flex-wrap ">
        {blogPost.map((item: blogPostConfig, index: number) => (
          <div key={index} className="blog__item margin-bottom-30">
            <img
              className="blog__item-image"
              src={`./image/blog/${item.path}.jpg`}
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
        ))}
      </div>
    </section>
  );
};

export default Blog;
