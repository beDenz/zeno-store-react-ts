import React, { ReactElement } from "react";
import "./contactForm.scss";

const ContactForm: React.FC = (): ReactElement => {
  return (
    <section className="contact-form container-small margin-center">
      <h2 className="page-title margin-bottom-50">Leave Message</h2>
      <form className="display-flex flex-space-between flex-wrap" action="">
        <input
          className="contact-form__input text-style"
          type="text"
          placeholder="Your name"
        />
        <input
          className="contact-form__input text-style"
          type="email"
          name=""
          id=""
          placeholder="Your Email"
        />
        <textarea
          className="contact-form__input-text text-style"
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
    </section>
  );
};

export default ContactForm;
