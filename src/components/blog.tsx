import React, { ReactElement, Fragment } from "react";
import Breadcrumb from "./UI/breadcrumb/breadcrumb";
import Pagetitle from "./UI/pageTitle/pagetitle";

interface TitleConfig {
  title?: string;
}

const Blog: React.FC<TitleConfig> = (props): ReactElement => {
  interface blogPostConfig {
    authorName: string;
    path: string;
    date: string;
    title: string;
    text: string;
  }

  let blogPost: blogPostConfig[] = [
    {
      authorName: "Laura Green",
      path: "photo-1506730447-7683abca8434",
      date: "January 14, 2019 ",
      title: "Modern & Contemporary Adult Bedroom",
      text: "blog text"
    },
    {
      authorName: "Laura Green",
      path: "photo-1549488344-cbb6c34cf08b",
      date: "January 14, 2019 ",
      title: "Explore Shoppable Styles Hand-Picked",
      text: "blog text"
    },
    {
      authorName: "Laura Green",
      path: "photo-1487015307662-6ce6210680f1",
      date: "January 14, 2019 ",
      title: "Shop the Look Cottage Country Living Room",
      text: "blog text"
    },
    {
      authorName: "Laura Green",
      path: "photo-1502005097973-6a7082348e28",
      date: "January 14, 2019 ",
      title: "Modern & Contemporary Adult Bedroom",
      text: "blog text"
    },
    {
      authorName: "Laura Green",
      path: "photo-1502005229762-cf1b2da7c5d6",
      date: "January 14, 2019 ",
      title: "Explore Shoppable Styles Hand-Picked",
      text: "blog text"
    },
    {
      authorName: "Laura Green",
      path: "photo-1505433329165-09624aec350e",
      date: "January 14, 2019 ",
      title: "Shop the Look Cottage Country Living Room",
      text: "blog text"
    },
    {
      authorName: "Laura Green",
      path: "photo-1505577058444-a3dab90d4253",
      date: "January 14, 2019 ",
      title: "Modern & Contemporary Adult Bedroom",
      text: "blog text"
    },
    {
      authorName: "Laura Green",
      path: "photo-1511974212900-b42a18e19eb8",
      date: "January 14, 2019 ",
      title: "Explore Shoppable Styles Hand-Picked",
      text: "blog text"
    },
    {
      authorName: "Laura Green",
      path: "photo-1530153739137-cafe11da39aa",
      date: "January 14, 2019 ",
      title: "Shop the Look Cottage Country Living Room",
      text: "blog text"
    }
  ];

  return (
    <Fragment>
      <Pagetitle title={props.title} />
      <Breadcrumb />
      <section className="blog container-small margin-center display-flex flex-collum align-center">
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
    </Fragment>
  );
};

export default Blog;
