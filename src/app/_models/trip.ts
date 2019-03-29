export interface Trip {
  destination: string;
  startDate: string;
  endDate: string;
  status: string;
  accommodation: string;
  organizer: string;
  type: string;
  requiresVehicle: boolean;
  requiresTickets: boolean;
}

export interface  TripResponse {
  totalPageCount?: number;
  totalResultsCount: number;
  results: Trip[];
}

export interface TripParams {
  page: number;
  pageSize: number;
}
