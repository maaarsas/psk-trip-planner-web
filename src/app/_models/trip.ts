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
}

export interface Office {
  id: number;
  title: string;
  maxCapacity: number;
}

export interface Trip {
  id?: number;
  organizer?: Person;
  tripParticipations: TripParticipation[];
  startDate: string;
  endDate: string;
  fromOffice: Office;
  toOffice: Office;
  flightTicketStatus: string;
  carRentalStatus: string;
  accomodationStatus: string;
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
  pageSize: number;
  startDateFrom?: string;
  startDateTo?: string;
  endDateFrom?: string;
  endDateTo?: string;
}
