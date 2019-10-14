import React, { useContext } from "react";
import { ProductItemsConfig } from "../../api/api";
import { Link } from "react-router-dom";
import { WishListItemContext } from "../../service/wishlist";

interface WishListItemConfig {
  item?: any;
}

const WishListItem: React.FC<WishListItemConfig> = ({ item }): JSX.Element => {
  const WishListItemState = useContext(WishListItemContext);
  return (
    <div className="wishList__row-product display-flex align-center flex-space-between row-border">
      <div className="wishList__product display-flex align-center width-50">
        <div className="wishList__image">
          <img
            src={`/image/products/${item.category}/${item.id}_1.jpg`}
            alt=""
          />
        </div>
        <h4 className="wishList__subtitle">
          <Link to={`/shop/${item.id}`}>{item.title}</Link>
        </h4>
      </div>

      <span className="wishList__price">${item.price}</span>

      <span className="wishList__stock">Instock</span>

      <div className="wishList__button-confirm">Add To Card</div>

      <span
        className="wishList__button elegant-icon"
        onClick={() =>
          WishListItemState.dispatch({ type: "delete", payload: item })
        }
      >
        &#x4d;
      </span>
    </div>
  );
};

export default WishListItem;
