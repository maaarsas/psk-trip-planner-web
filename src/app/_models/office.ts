export interface Office {
  id?: number;
  title: string;
  maxCapacity: number;
}

export interface OfficeParams {
  page: number;
  resultsPerPage: number;
}

export interface  OfficeResponse {
  totalPageCount: number;
  totalResultsCount: number;
  results: Office[];
}
