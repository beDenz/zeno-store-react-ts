import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/subComponents/header/header";
import Footer from "./components/subComponents/footer/footer";
import Home from "./components/home";
import Blog from "./components/blog";
import Contact from "./components/contact";
import Page404 from "./components/page404/page404";
import Faqs from "./components/faqs/faqs";
import Shop from "./components/shop";
import ShoppingCart from "./components/shoppingCart/shoppingCart";
import WishList from "./components/wishList/wishList";
import { ShoppingCartProvider } from "./service/cart";
import { WishListItemProvider } from "./service/wishlist";

const App: React.FC = () => {
  return (
    <ShoppingCartProvider>
      <WishListItemProvider>
        <Router>
          <Fragment>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/blog"
                component={() => <Blog title="blog" />}
              />
              <Route exact path="/shop" component={Shop} />
              <Route exact path="/shop/:id" component={Shop} />
              <Route exact path="/faqs" component={Faqs} />
              <Route exact path="/contact">
                <Contact title="contact" />
              </Route>
              <Route path="/shoppingcart" component={() => <ShoppingCart />} />
              <Route path="/wishlist" component={() => <WishList />} />
              <Route path="*" component={Page404} />
            </Switch>
            <Footer />
          </Fragment>
        </Router>
      </WishListItemProvider>
    </ShoppingCartProvider>
  );
};

export default App;
