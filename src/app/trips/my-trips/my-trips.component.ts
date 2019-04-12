import {Component, OnInit} from '@angular/core';
import {Trip, TripParams} from '../../_models/trip';
import {TripService} from '../../_services/trip.service';
import {DEFAULT_PAGE, DEFAULT_PAGE_SIZE, DEFAULT_START_DATE_FROM} from '../../_constants/trip-list.const';
import { TripActionButton } from '../trip-list/action-buttons/trip-action-button';

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.component.html',
  styleUrls: ['./my-trips.component.scss']
})
export class MyTripsComponent implements OnInit {

  trips: Trip[];
  availableTrips: number;
  actionButtons: TripActionButton[] = [];

  constructor(private tripService: TripService) {
    this.onParamsChange({pageSize: DEFAULT_PAGE_SIZE, page: DEFAULT_PAGE, startDateFrom: DEFAULT_START_DATE_FROM});
  }

  ngOnInit() {
  }

  onParamsChange(params: TripParams) {
    this.tripService.getMyTrips(params).subscribe(tripData => {
      this.trips = tripData.results;
      this.availableTrips = tripData.totalResultsCount;
    });
  }

}
