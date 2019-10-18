import React from "react";
import "./blogPost.scss";
import { blogPostConfig } from "../../../api/api";
import AuthorBlock from "../../UI/authorBlock";
import TagsBlogPage from "../../UI/tagsBlogPage";
import SocialBlogPage from "../../UI/socialBlogPage";
import CommentBlogForm from "../../UI/commentBlogForm";

interface BlogPostPageConfig {
  item: blogPostConfig;
}

const BlogPostPage: React.FC<BlogPostPageConfig> = ({ item }): JSX.Element => {
  //страница статична
  //TODO: реализовать динамическое формирование страницы,

  return (
    <section className="container margin-center">
      <div className="blog-detail container-small margin-center">
        <h1 className="page-title margin-center text-align-center margin-bottom-30">
          Modern & Contemporary Adult Bedroom
        </h1>
        <div className="blog-detail__detail">
          By Laura Green | January 14, 2019 | 8 Comments
        </div>
        <div className="blog-detail__image margin-center margin-top-30 margin-bottom-30">
          <img src="/image/blog/1.jpg" alt="" />
        </div>
        <p className="blog-detail__text container-blog margin-center">
          The site is characterized by organically grown buildings that vary
          greatly in terms of materials and finish. The new atelier consists of
          a primarily double-height brick volume, partly embraced by lower
          secondary buildings.
        </p>
        <p className="blog-detail__text container-blog margin-center">
          The primary volume has a symmetrical floor plan that aspires peace and
          serenity. The sober but brutal materialization supports the function
          that it includes. Both narrow vertical gate doors vary in width and
          give the opportunity to realize large sculptures.
          <span>
            The corner window forms a place within a place that is a resting
            point within the large space.
          </span>
          The study area is located at the back with a view of the vast nature.
          Together with the other buildings, a congruent story has been managed
          in which the whole has a reinforcing effect on the components. The use
          of materials seeks connection to the main house, the adjacent stables
          and brooks without falling into copying. The sloping location allows
          an inner court to be formed without closing off from the natural
          garden behind it.
        </p>
        <div className="blog-detail__images-grid margin-center margin-bottom-30 margin-top-30">
          <div className="blog-detail__image image1">
            <img src="/image/blog/2.jpg" alt="" />
          </div>
          <div className="blog-detail__image image2">
            <img src="/image/blog/3.jpg" alt="" />
          </div>
          <div className="blog-detail__image image3">
            <img src="/image/blog/4.jpg" alt="" />
          </div>
          <div className="blog-detail__image image4">
            <img src="/image/blog/5.jpg" alt="" />
          </div>
        </div>
        <h3 className="blog-detail__subtitle container-blog margin-center">
          Hold your horses!
        </h3>
        <p className="blog-detail__text container-blog margin-center">
          Never ever think of giving up. Winners never quit and quitters never
          win. Take all negative words out of your mental dictionary and focus
          on the solutions with utmost conviction and patience. The battle is
          never lost until you’ve abandon your vision. But what if you’re really
          exhausted physically, mentally, and most of all emotionally? Here are
          some sources of motivation to prompt you in reaching the peak of
          accomplishment. The Overwhelming Feeling of Attaining your Desired End
          How would you feel after accomplishing your mission? Of course you
          will feel ecstatic. You might be shedding tears of joy. Let this
          tremendous feeling sink in and encourage you to persist despite all
          odds.
        </p>
        <div className="blog-detail__footer container-blog margin-center display-flex flex-space-between align-center margin-top-30">
          <AuthorBlock />
          <div>
            <TagsBlogPage />
            <SocialBlogPage />
          </div>
        </div>
      </div>
      <CommentBlogForm />
    </section>
  );
};

export default BlogPostPage;
