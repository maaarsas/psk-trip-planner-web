import { Office } from './office';

export interface Person {
  id: number;
  name: string;
  surname: string;
}

export interface TripParticipation {
  id: number;
  participant: Person;
  status: string;
  createdDateTime: string;
  lastEditedDateTime: string;
  flightTicketStatus: string;
  carRentalStatus: string;
  accommodationStatus: string;
  flightTicketPrice: number;
  carRentalPrice: number;
  accommodationPrice: number;
}

export interface Trip {
  id?: number;
  organizer?: Person;
  tripParticipations: TripParticipation[];
  startDate: string;
  endDate: string;
  fromOffice: Office;
  toOffice: Office;
  createdDateTime: string;
  lastEditDateTime: string;
}

export interface  TripResponse {
  totalPageCount: number;
  totalResultsCount: number;
  results: Trip[];
}

export interface TripParams {
  page: number;
  resultsPerPage: number;
  startDateFrom?: string;
  startDateTo?: string;
  endDateFrom?: string;
  endDateTo?: string;
}
