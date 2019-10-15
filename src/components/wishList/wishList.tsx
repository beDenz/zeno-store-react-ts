import React, { ReactElement, useContext } from "react";
import "./wishList.scss";
import WishListItem from "./wishListitem";
import { WishListItemContext } from "../../service/wishlist";
import { productsList, ProductItemsConfig } from "../../api/api";
import Breadcrumb from "../UI/breadcrumb/breadcrumb";
import Pagetitle from "../UI/pageTitle/pagetitle";
import { createBreadcrumb, createTitle } from "../../service/utitiles";

interface WishListConfig {
  match: any;
}

const WishList: React.FC<WishListConfig> = ({ match }): ReactElement => {
  const WishListItemState = useContext(WishListItemContext);
  return (
    <section className="wishList container-small margin-center">
      <div className="text-align-center">
        <Pagetitle title={createTitle(match.url)} />
        <Breadcrumb title={createBreadcrumb(match.url)} />
      </div>
      <div className="wishList__row-titles display-flex flex-space-between row-border">
        <h3 className="wishList__title flex-grow">Products</h3>
        <h3 className="wishList__title margin-right-60">Price</h3>
        <h3 className="wishList__title">Stock Status</h3>
      </div>
      {WishListItemState.state.map(
        (itemMap: { id: string; price: number }, index: number) => {
          const temp: ProductItemsConfig = productsList.filter(
            (itemFilter: ProductItemsConfig) => itemFilter.id === itemMap.id
          )[0];
          return <WishListItem key={index} item={temp} />;
        }
      )}
    </section>
  );
};

export default WishList;
