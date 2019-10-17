import React from "react";

const CommentBlogForm: React.FC = (): JSX.Element => {
  return (
    <div className="blog-comment-form container-blog margin-center">
      <h1 className="page-title margin-center">Leave A Comment</h1>
      <form className="display-flex flex-wrap flex-space-between" action="">
        <input
          className="blog-comment-form__input"
          type="text"
          name=""
          id=""
          placeholder="Your name"
        />
        <input
          className="blog-comment-form__input"
          type="email"
          name=""
          id=""
          placeholder="Your Email"
        />
        <input
          className="blog-comment-form__input"
          type="tel"
          name=""
          id=""
          placeholder="Your phone"
        />
        <textarea
          className="blog-comment-form__input-text margin-center"
          name=""
          id=""
          cols={30}
          rows={10}
          placeholder="Your massage"
        />
        <button type="submit" className="contact-form__button margin-center">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default CommentBlogForm;
