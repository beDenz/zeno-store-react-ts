import React, { ReactElement, useState, useContext } from "react";
import Pagetitle from "./UI/pageTitle/pagetitle";
import ShopFilterResult from "./UI/shopFilterResult/shopFilterResult";
import SortBy from "./UI/sortBy/sortBy";
import StyleViewItems from "./UI/styleViewItems/styleViewItems";
import TagsList from "./UI/tagsList/tagsList";
import PriceFilter from "./UI/priceFilter/priceFilter";
import ProductCard from "./productCard/productCard";
import { ResultFilterContext } from "../service/filterresult";
import ProductsList from "./subComponents/productList";
import Breadcrumb from "./UI/breadcrumb/breadcrumb";
import {
  ProductsListContext,
  ProductItemsConfig
} from "../service/dataBaseState";
import {
  createBreadcrumb,
  createTitle,
  funcSortProps
} from "../utilities/utilities";

interface ShopConfig {
  match: any; // TODO: установить тип
}

interface ShopFilterConfig {
  minPrice: number;
  maxPrice: number;
  showCategory: string;
}

declare global {
  interface Array<T> {
    // разширение интерфейса для функиции
    setNumberOfProducts(this: T[]): Array<T>;
  }
}

const Shop: React.FC<ShopConfig> = ({ match }): ReactElement => {
  const ResultFilterState = useContext(ResultFilterContext);

  const [shopFilter, SetShopFilter] = useState<ShopFilterConfig>({
    minPrice: 1,
    maxPrice: 10000,
    showCategory: "all"
  }); // фильтры

  const [styleViewState, setStyleViewState] = useState<string | null>("grid"); // вид сетки
  const [typeOfSortItems, setTypeOfSortItems] = useState<string | undefined>(
    "default"
  ); // сортировка по цене

  const { productListState } = useContext(ProductsListContext);
  /// обработка фильтра по цене
  const onChangePrice = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.value.match(/[^0-9]/gi)) {
      e.target.id === "minprice"
        ? SetShopFilter({ ...shopFilter, minPrice: +e.target.value })
        : SetShopFilter({ ...shopFilter, maxPrice: +e.target.value });
    }
  };
  // выбор категории
  const setShowCategory = (e: React.MouseEvent<HTMLElement>): void => {
    const target = e.target as HTMLElement;
    SetShopFilter({
      ...shopFilter,
      showCategory: target.innerHTML.toLowerCase()
    });
  };
  // устанавливаем вид сетки
  const setStyleView = (e: React.MouseEvent): void => {
    const target = e.target as HTMLElement;
    if (target.getAttribute("type") !== styleViewState)
      setStyleViewState(target.getAttribute("type"));
  };
  /// функиция возвращет обьект для формирования карточки товара
  const getProductDetail = (
    array: ProductItemsConfig[],
    id: string
  ): ProductItemsConfig =>
    array.filter((item: ProductItemsConfig) => item.id === id)[0];

  // обработка выбора типа сортировки
  const onChangeTypeOfSortItems = (
    option: React.FormEvent<HTMLSelectElement>
  ): void => {
    setTypeOfSortItems(option.currentTarget.value);
  };

  ///////////////////////////////////////////////////////

  function setNumberOfProducts(
    this: ProductItemsConfig[]
  ): ProductItemsConfig[] {
    // определяем количество товаров после сортировок
    let arr: ProductItemsConfig[] = this;
    ResultFilterState.dispatch({ type: "add", payload: arr.length });
    return arr;
  }

  Array.prototype.setNumberOfProducts = setNumberOfProducts;
  //////////////////////////////////////////////////////////////////

  console.log(`!!!!!!!!!!!!`);
  console.log(`Render Shop`);

  return (
    <section className="shop container-1500 display-flex margin-center">
      <div className="filters">
        <TagsList onClick={setShowCategory} />
        <PriceFilter priceFilter={shopFilter} onChange={onChangePrice} />
      </div>
      <div className="shop__inner">
        <div className="shop__inner-first-row display-flex flex-space-between ">
          <div>
            <Pagetitle title={createTitle(match.url)} />
            <Breadcrumb title={createBreadcrumb(match.url)} />
          </div>
          {match.params.id === undefined ? (
            <div className="sort display-flex align-center">
              <ShopFilterResult />
              <SortBy onChange={onChangeTypeOfSortItems} />
              <StyleViewItems
                onClick={setStyleView}
                styleViewState={styleViewState}
              />
            </div>
          ) : null}
        </div>
        {match.params.id === undefined ? (
          <ProductsList
            shopFilter={shopFilter}
            styleViewState={styleViewState}
            funcSortProps={funcSortProps}
            typeOfSortItems={typeOfSortItems}
            setNumberOfProducts={setNumberOfProducts}
          />
        ) : (
          <ProductCard
            itemDetail={getProductDetail(productListState, match.params.id)}
          />
        )}
      </div>
    </section>
  );
};

export default Shop;
