export const navTitle: { [key: string]: string } = {
  ['search']: '검색 결과'
};

export const DEFAULT_PERPAGE = 10;
export const DEFAULT_PAGE = 1;

export const addComma = (num: number) => {
  if (!num) return num;
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
