import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Header from "./components/subComponents/header/header";
import Footer from "./components/subComponents/footer/footer";
import Home from "./components/home";

const App: React.FC = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Home />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
