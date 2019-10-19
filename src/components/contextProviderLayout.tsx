import React from "react";
import { ShoppingCartProvider } from "../service/cart";
import { WishListItemProvider } from "../service/wishlist";
import { BillingProvider } from "../service/billing";
import { ResultFilterProvider } from "../service/filterresult";
import { ProductsListProvider } from "../service/dataBaseState";
import App from "../App";
import { BlogsListProvider } from "../service/blogsList";

const ContextProviderLayout: React.FC = (): JSX.Element => {
  return (
    <ProductsListProvider>
      <BlogsListProvider>
        <ResultFilterProvider>
          <ShoppingCartProvider>
            <WishListItemProvider>
              <BillingProvider>
                <ResultFilterProvider>
                  <App />
                </ResultFilterProvider>
              </BillingProvider>
            </WishListItemProvider>
          </ShoppingCartProvider>
        </ResultFilterProvider>
      </BlogsListProvider>
    </ProductsListProvider>
  );
};

export default ContextProviderLayout;
