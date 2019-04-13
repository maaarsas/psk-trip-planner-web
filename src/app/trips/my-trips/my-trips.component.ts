import {Component, OnInit} from '@angular/core';
import {Trip, TripParams} from '../../_models/trip';
import {TripService} from '../../_services/trip.service';
import {DEFAULT_START_DATE_FROM} from '../../_constants/trip-list.const';
import { TripActionButton } from '../trip-list/action-buttons/trip-action-button';
import {DEFAULT_PAGE, DEFAULT_RESULTS_PER_PAGE} from '../../_constants/list.const';

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.component.html',
  styleUrls: ['./my-trips.component.scss']
})
export class MyTripsComponent implements OnInit {

  trips: Trip[] = [];
  availableTrips: number;
  actionButtons: TripActionButton[] = [];

  constructor(private tripService: TripService) {
    this.onParamsChange({resultsPerPage: DEFAULT_RESULTS_PER_PAGE, page: DEFAULT_PAGE, startDateFrom: DEFAULT_START_DATE_FROM});
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
