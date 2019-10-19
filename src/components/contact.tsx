import React, { ReactElement, Fragment } from "react";
import Breadcrumb from "./UI/breadcrumb/breadcrumb";
import Pagetitle from "./UI/pageTitle/pagetitle";
import ContactForm from "./subComponents/contactForm/contactForm";
import ContactInfo from "./subComponents/contactInfo/contactInfo";
import Googlemap from "./UI/googlemap/googlemap";
import { createBreadcrumb, createTitle } from "../utilities/utilities";

interface ContactConfig {
  match: any;
}

const Contact: React.FC<ContactConfig> = ({ match }): ReactElement => {
  return (
    <Fragment>
      <div className=" padding-top-100 text-align-center">
        <Pagetitle title={createTitle(match.url)} />
        <Breadcrumb title={createBreadcrumb(match.url)} />
      </div>
      <ContactInfo />
      <Googlemap />
      <ContactForm />
    </Fragment>
  );
};

export default Contact;
