import React, { ReactElement, Fragment } from "react";
import Service from "./UI/service/service";
import DealOfTheDay from "./UI/dealOfTheDay/dealOfTheDay";
import Instagram from "./UI/instagram/instagram";

const Home: React.FC = (): ReactElement => {
  return (
    <Fragment>
      <Service />
      <DealOfTheDay />
      <Instagram />
    </Fragment>
  );
};

export default Home;
