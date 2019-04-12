import { Component, OnInit } from '@angular/core';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, DEFAULT_START_DATE_FROM } from '../../_constants/trip-list.const';
import { Trip, TripParams } from '../../_models/trip';
import { TripService } from '../../_services/trip.service';

@Component({
  selector: 'app-my-organized-trips',
  templateUrl: './my-organized-trips.component.html',
  styleUrls: ['./my-organized-trips.component.scss']
})
export class MyOrganizedTripsComponent implements OnInit {

  trips: Trip[] = [];
  availableTrips: number;

  constructor(private tripService: TripService) {
    this.onParamsChange({pageSize: DEFAULT_PAGE_SIZE, page: DEFAULT_PAGE, startDateFrom: DEFAULT_START_DATE_FROM});
  }

  ngOnInit() {
  }

  onParamsChange(params: TripParams) {
    this.tripService.getMyOrganizedTrips(params).subscribe(tripData => {
      this.trips = tripData.results;
      this.availableTrips = tripData.totalResultsCount;
    });
  }
}
