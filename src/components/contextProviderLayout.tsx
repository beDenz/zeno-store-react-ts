import React from "react";
import { ShoppingCartProvider } from "../service/cart";
import { WishListItemProvider } from "../service/wishlist";
import { BillingProvider } from "../service/billing";
import { ResultFilterProvider } from "../service/filterresult";
import { ProductsListProvider } from "../service/dataBaseState";
import App from "../App";

const ContextProviderLayout: React.FC = (): JSX.Element => {
  return (
    <ProductsListProvider>
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
    </ProductsListProvider>
  );
};

export default ContextProviderLayout;
