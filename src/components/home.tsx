import React, { ReactElement, Fragment } from "react";
import Service from "./UI/service/service";
import DealOfTheDay from "./UI/dealOfTheDay/dealOfTheDay";
import Instagram from "./UI/instagram/instagram";
import MetroGridItems from "./subComponents/metroGridItems/metroGridItems";
import FeaturedProducts from "./subComponents/featuredProducts/featuredProducts";
import Slider from "./subComponents/slider/slider";
import { SliderHOC } from "./subComponents/slider/sliderHOC";

const Home: React.FC = (): ReactElement => {
  return (
    <Fragment>
      <SliderHOC />
      <Service />
      <MetroGridItems />
      <FeaturedProducts />
      <DealOfTheDay />
      <Instagram />
    </Fragment>
  );
};

export default Home;
