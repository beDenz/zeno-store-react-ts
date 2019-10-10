import React, { ReactElement } from "react";
import "./contactInfo.scss";

const ContactInfo: React.FC = (): ReactElement => {
  return (
    <section className="contact-info container-small display-flex margin-center flex-justify-space-around">
      <div className="contact-info__item">
        <span className="contact-info__icon">
          <img src="image/Icon_phone.png" alt="" />
        </span>
        <h3 className="contact-info__title">Phone</h3>
        <span className="contact-info__text">+01-3-8888-6868</span>
      </div>
      <div className="contact-info__item">
        <span className="contact-info__icon">&#xe01d;</span>
        <h3 className="contact-info__title">Address</h3>
        <span className="contact-info__text">
          38 Block Street, Sydney, Australia
        </span>
      </div>
      <div className="contact-info__item">
        <span className="contact-info__icon">&#x7d;</span>
        <h3 className="contact-info__title">Open time</h3>
        <span className="contact-info__text">10:00 am to 23:00 pm</span>
      </div>
      <div className="contact-info__item">
        <span className="contact-info__icon">&#xe010;</span>
        <h3 className="contact-info__title">Email</h3>
        <span className="contact-info__text">Info.deercreative@gmail.com</span>
      </div>
    </section>
  );
};

export default ContactInfo;
