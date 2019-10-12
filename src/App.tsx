import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import "./App.scss";
import Header from "./components/subComponents/header/header";
import Footer from "./components/subComponents/footer/footer";
import Home from "./components/home";
import Blog from "./components/blog";
import Contact from "./components/contact";
import Page404 from "./components/page404/page404";
import Faqs from "./components/faqs/faqs";
import Shop from "./components/shop";
import ShopingCart from "./components/shopingCart/shopingCart";
import WishList from "./components/wishList/wishList";

const App: React.FC = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={() => <Blog title="blog" />} />
          <Route path="/shop">
            <Shop title="shop" />
          </Route>
          <Route path="/faqs" component={Faqs} />
          <Route path="/contact">
            <Contact title="contact" />
          </Route>
          <Route path="/shopingcart" component={() => <ShopingCart />} />
          <Route path="/wishlist" component={() => <WishList />} />

          <Route path="*" component={Page404} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
