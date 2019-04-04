export const PAGE_SIZE_OPTIONS = [10, 20, 50];
export const DEFAULT_PAGE_SIZE = 10;
export const DEFAULT_PAGE = 1;

let today = new Date();
export const DEFAULT_START_DATE_FROM_MODEL = {year: today.getFullYear(), month: today.getMonth()+1, day: today.getDay()}
export const DEFAULT_START_DATE_FROM = new Date(today.getTime() - (today.getTimezoneOffset() * 60000 )).toISOString().split("T")[0];
