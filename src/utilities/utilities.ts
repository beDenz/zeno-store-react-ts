import { ProductItemsConfig } from "../service/dataBaseState";

// функция добавления обьекта в карзину либой wishlist
export const addToCart = (state: any, id: string, price: number) => {
  // TODO: реализовать изменение количества если обьект уже есть в карточке
  if (
    !state.state.some((item: { id: string; price: number }) => item.id === id)
  ) {
    state.dispatch({
      type: "add",
      payload: { id, price, count: 1 }
    });
  }
};

// функция создания пути(хлебных крошек)
export const createBreadcrumb = (url: string): string[] => {
  const home: string[] = ["home"];
  const temp: string[] = url
    .split(/\//)
    .filter((item: string) => (item || item !== "" ? item : null));
  return home.concat(temp);
};

// функиция создания заголовков
export const createTitle = (url: string): string[] => {
  return url
    .split(/\//)
    .filter((item: string) => (item || item !== "" ? item : null));
};

/// функция возвращает параметры для сортировки
export const funcSortProps = (type: string | undefined) => (
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

//
/*

//TODO: Написать универсальную функцию 

const addItem = (func, dispatch) => {
  getBlogsList()
    .then((res: blogPostConfig[]) => // Можно ли параметом передать интерфейс, или использовать typeOf
      blogsListDispatch({ type: "add", payload: res })
    )
    .catch((res: blogPostConfig[]) => blogsListDispatch({ type: "error" }));
  //TODO: обработать ошибку соединения с сервером
};

*/
