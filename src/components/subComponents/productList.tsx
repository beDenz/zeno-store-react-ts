import React, { useContext } from "react";
import {
  ProductsListContext,
  ProductItemsConfig
} from "../../service/dataBaseState";
import ProductItem from "../UI/productItem/productItem";
import classnames from "classnames";

interface ShopFilterConfig {
  minPrice: number;
  maxPrice: number;
  showCategory: string;
}

interface ProductsListConfig {
  shopFilter: ShopFilterConfig;
  styleViewState: string | null;
  funcSortProps: (type: string | undefined) => any;
  typeOfSortItems: string | undefined;
  setNumberOfProducts: (this: ProductItemsConfig[]) => ProductItemsConfig[];
}
const ProductsList: React.FC<ProductsListConfig> = ({
  shopFilter,
  styleViewState,
  funcSortProps,
  typeOfSortItems
}): JSX.Element => {
  const { productListState } = useContext(ProductsListContext);
  return (
    <div
      className={classnames(
        "featured-products__items",
        "margin-center",
        {
          "display-flex flex-space-between flex-wrap": styleViewState === "grid"
        },
        { "flex-collum": styleViewState === "list" }
      )}
    >
      {productListState
        .filter((item: ProductItemsConfig) =>
          shopFilter.showCategory !== "all"
            ? shopFilter.showCategory
                .toLowerCase()
                .charAt(0)
                .toUpperCase() +
                shopFilter.showCategory.toLowerCase().substring(1) ===
              item.category
                .toLowerCase()
                .charAt(0)
                .toUpperCase() +
                item.category.toLowerCase().substring(1)
            : true
        )
        .filter(
          (item: ProductItemsConfig) =>
            item.price > shopFilter.minPrice && item.price < shopFilter.maxPrice
        )
        .setNumberOfProducts()
        .sort(funcSortProps(typeOfSortItems))
        .map((item: ProductItemsConfig, index: number) => (
          <ProductItem
            key={index}
            productList={item}
            styleViewState={styleViewState}
          />
        ))}
    </div>
  );
};

export default ProductsList;
