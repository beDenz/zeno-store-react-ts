import React, { ReactElement, Fragment } from "react";
import Breadcrumb from "./UI/breadcrumb/breadcrumb";
import Pagetitle from "./UI/pageTitle/pagetitle";
import ContactForm from "./subComponents/contactForm/contactForm";
import ContactInfo from "./subComponents/contactInfo/contactInfo";
import Googlemap from "./UI/googlemap/googlemap";

const Contact: React.FC = (): ReactElement => {
  return (
    <Fragment>
      <Pagetitle />
      <Breadcrumb />
      <ContactInfo />
      <Googlemap />
      <ContactForm />
    </Fragment>
  );
};

export default Contact;
