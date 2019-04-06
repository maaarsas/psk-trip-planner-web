export const PAGE_SIZE_OPTIONS = [10, 20, 50];
export const DEFAULT_PAGE_SIZE = 10;
export const DEFAULT_PAGE = 1;

const today = new Date();
export const DEFAULT_START_DATE_FROM_MODEL = {year: today.getFullYear(), month: today.getMonth()+1, day: today.getDate()};
export const DEFAULT_START_DATE_FROM = today.getFullYear() + '-' + ('0'+ (today.getMonth()+1)).slice(-2) + '-' + ('0'+ today.getDate()).slice(-2);
