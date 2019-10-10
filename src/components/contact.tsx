import React, { ReactElement, Fragment } from "react";
import Breadcrumb from "./UI/breadcrumb/breadcrumb";
import Pagetitle from "./UI/pageTitle/pagetitle";
import ContactForm from "./subComponents/contactForm/contactForm";
import ContactInfo from "./subComponents/contactInfo/contactInfo";
import Googlemap from "./UI/googlemap/googlemap";

interface TitleConfig {
  title?: string;
}

const Contact: React.FC<TitleConfig> = (props): ReactElement => {
  return (
    <Fragment>
      <Pagetitle title={props.title} />
      <Breadcrumb />
      <ContactInfo />
      <Googlemap />
      <ContactForm />
    </Fragment>
  );
};

export default Contact;
