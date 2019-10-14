export const createBreadcrumb = (url: string): string[] => {
  const home: string[] = ["home"];
  const temp: string[] = url
    .split(/\//)
    .filter((item: string) => (item || item !== "" ? item : null));
  return home.concat(temp);
};

export const createTitle = (url: string): string[] => {
  return url
    .split(/\//)
    .filter((item: string) => (item || item !== "" ? item : null));
};
