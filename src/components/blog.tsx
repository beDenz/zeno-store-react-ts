import React, { useContext, useEffect } from "react";
import Breadcrumb from "./UI/breadcrumb/breadcrumb";
import Pagetitle from "./UI/pageTitle/pagetitle";
import { createBreadcrumb, createTitle } from "../utilities/utilities";
import BlogItem from "./subComponents/blogItem/blogItem";
import BlogPostPage from "./subComponents/blogPost/blogPost";
import { blogPostConfig, BlogsListContext } from "../service/blogsList";

interface TitleConfig {
  match: any;
}

const Blog: React.FC<TitleConfig> = ({ match }): JSX.Element => {
  const { blogsListState, getBlogsList, blogsListDispatch } = useContext(
    BlogsListContext
  );

  const blogsListApi = () => {
    getBlogsList()
      .then((res: blogPostConfig[]) =>
        blogsListDispatch({ type: "add", payload: res })
      )
      .catch((res: blogPostConfig[]) => blogsListDispatch({ type: "error" }));
    //TODO: обработать ошибку соединения с сервером
  };

  useEffect(() => blogsListApi(), []);

  /// функиция возвращет обьект для формирования карточки блога
  const getBlogItem = (array: blogPostConfig[], id: string): blogPostConfig =>
    array.filter((item: blogPostConfig) => item.title === id)[0];

  return (
    <section className="blog container-small margin-center display-flex flex-collum align-center">
      {match.params.id ? null : (
        <div className="text-align-center">
          <Pagetitle title={createTitle(match.url)} />
          <Breadcrumb title={createBreadcrumb(match.url)} />
        </div>
      )}
      {match.params.id ? (
        <BlogPostPage item={getBlogItem(blogsListState, match.params.id)} />
      ) : (
        <div className="blog__items display-flex flex-space-between flex-wrap ">
          {blogsListState.map((item: blogPostConfig, index: number) => (
            <BlogItem key={index} item={item} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Blog;
