const today = new Date();
export const DEFAULT_START_DATE_FROM_MODEL = {year: today.getFullYear(), month: today.getMonth()+1, day: today.getDate()};
export const DEFAULT_START_DATE_FROM = today.getFullYear() + '-' + ('0'+ (today.getMonth()+1)).slice(-2) + '-' + ('0'+ today.getDate()).slice(-2);
