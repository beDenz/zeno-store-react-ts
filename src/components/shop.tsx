import React, { ReactElement, useState, useContext } from "react";
import Pagetitle from "./UI/pageTitle/pagetitle";
import ShopFilterResult from "./UI/shopFilterResult/shopFilterResult";
import SortBy from "./UI/sortBy/sortBy";
import StyleViewItems from "./UI/styleViewItems/styleViewItems";
import TagsList from "./UI/tagsList/tagsList";
import { productsList, ProductItemsConfig } from "../api/api";
import PriceFilter from "./UI/priceFilter/priceFilter";
import ProductCard from "./productCard/productCard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useLocation,
  useRouteMatch
} from "react-router-dom";
import ProductsList from "./subComponents/productList";
import Breadcrumb from "./UI/breadcrumb/breadcrumb";

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
    setNumberOfProducts(this: T[]): Array<T>;
  }
}

const Shop: React.FC<ShopConfig> = ({ match }): ReactElement => {
  const [shopFilter, SetShopFilter] = useState<ShopFilterConfig>({
    minPrice: 1,
    maxPrice: 10000,
    showCategory: "all"
  }); // фильтры

  const [styleViewState, setStyleViewState] = useState<string | null>("grid"); // вид сетки
  const [typeOfSortItems, setTypeOfSortItems] = useState<string | undefined>(
    "default"
  ); // вид сортировок
  const [filterResult, setFilterResult] = useState<number>(0); // количество товаров после сортировок

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
  /// функция возвращает параметры для сортировки
  const funcSortProps = (type: string | undefined) => (
    a: ProductItemsConfig,
    b: ProductItemsConfig
  ): any => {
    switch (type) {
      case "default":
        return 0;
      case "priceMinToHigh":
        return a.price === b.price ? 0 : a.price > b.price ? 1 : -1;
      case "priceHighToMin":
        return a.price === b.price ? 0 : a.price < b.price ? 1 : -1;
    }
  };
  ///////////////////////////////////////////////////////
  // определяем количество товаров после сортировок

  function setNumberOfProducts(
    this: ProductItemsConfig[]
  ): ProductItemsConfig[] {
    // определяем количество товаров после сортировок
    let arr: ProductItemsConfig[] = this;
    setFilterResult(arr.length);
    console.log(arr);
    return arr;
  }

  Array.prototype.setNumberOfProducts = setNumberOfProducts;
  //////////////////////////////////////////////////////////////////

  // функиция создания заголовков
  const createTitle = (url: string): string[] => {
    return url
      .split(/\//)
      .filter((item: string) => (item || item !== "" ? item : null));
  };
  // функция создания пути(хлебных крошек)
  const createBreadcrumb = (url: string): string[] => {
    const home: string[] = ["home"];
    const temp: string[] = url
      .split(/\//)
      .filter((item: string) => (item || item !== "" ? item : null));
    return home.concat(temp);
  };

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
              <ShopFilterResult filterResult={filterResult} />
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
            itemDetail={getProductDetail(productsList, match.params.id)}
          />
        )}
      </div>
    </section>
  );
};

export default Shop;
