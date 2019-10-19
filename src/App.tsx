import React, { Fragment, useEffect, useContext } from "react";
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
import CheckOut from "./components/checkOut/checkOut";
import {
  ProductsListContext,
  ProductItemsConfig
} from "./service/dataBaseState";

const App: React.FC = () => {
  const productsState: any = useContext(ProductsListContext);

  const productsListApi = () => {
    productsState
      .getProductsList()
      .then((res: ProductItemsConfig[]) =>
        productsState.productsListDispatch({ type: "add", payload: res })
      )
      .catch((res: ProductItemsConfig[]) =>
        productsState.productsListDispatch({ type: "error" })
      );
    // TODO: написать обработку ошибки
  };

  useEffect(() => productsListApi(), []);
  console.log("!!!!!");
  console.log(productsState.productListState);
  console.log("!!!!!");
  return (
    <Router>
      {
        //basename="/zeno-store-react-ts">
      }
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/:id" component={Blog} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/shop/:id" component={Shop} />
          <Route exact path="/faqs" component={Faqs} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/shoppingcart" component={ShoppingCart} />
          <Route exact path="/wishlist" component={WishList} />
          <Route exact path="/checkout" component={CheckOut} />
          <Route path="*" component={Page404} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
