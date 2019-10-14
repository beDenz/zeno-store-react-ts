import React, { ReactElement, useContext } from "react";
import "./wishList.scss";
import WishListItem from "./wishListitem";
import { WishListItemContext } from "../../service/wishlist";
import { productsList, ProductItemsConfig } from "../../api/api";

const WishList: React.FC = (): ReactElement => {
  const WishListItemState = useContext(WishListItemContext);
  return (
    <section className="wishList container-small margin-center">
      <div className="wishList__row-titles display-flex flex-space-between row-border">
        <h3 className="wishList__title flex-grow">Products</h3>
        <h3 className="wishList__title margin-right-60">Price</h3>
        <h3 className="wishList__title">Stock Status</h3>
      </div>

      {WishListItemState.state.map(
        (itemMap: { id: string; price: number }, index: number) => {
          const temp = productsList.filter(
            (itemFilter: ProductItemsConfig) => itemFilter.id === itemMap.id
          );
          return <WishListItem key={index} item={temp[0]} />;
        }
      )}
    </section>
  );
};

export default WishList;
