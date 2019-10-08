import React from "react";
import "./App.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Breadcrumb from "./components/breadcrumb/breadcrumb";
import Faqs from "./components/faqs/faqs";
import Page404 from "./components/page404/page404";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Breadcrumb />
      <Faqs />
      <Page404 />
      <Footer />
    </div>
  );
};

export default App;
