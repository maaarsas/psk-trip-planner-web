import { Component, OnInit } from '@angular/core';
import { DEFAULT_START_DATE_FROM } from '../../_constants/trip-list.const';
import { Trip, TripParams } from '../../_models/trip';
import { TripService } from '../../_services/trip.service';
import {DEFAULT_PAGE, DEFAULT_RESULTS_PER_PAGE} from '../../_constants/list.const';
import {TripActionButton} from '../../trips/trip-list/action-buttons/trip-action-button';
import {TripEditButtonComponent} from '../../trips/trip-list/action-buttons/trip-edit-button.component';
import { TripMergeButtonComponent } from '../../trips/trip-list/action-buttons/trip-merge-button.component';


@Component({
  selector: 'app-my-organized-trips',
  templateUrl: './my-organized-trips.component.html',
  styleUrls: ['./my-organized-trips.component.scss']
})
export class MyOrganizedTripsComponent implements OnInit {

  trips: Trip[] = null;
  availableTrips: number;
  actionButtons: TripActionButton[] = [TripMergeButtonComponent, TripEditButtonComponent];

  constructor(private tripService: TripService) {
    this.onParamsChange({resultsPerPage: DEFAULT_RESULTS_PER_PAGE, page: DEFAULT_PAGE, startDateFrom: DEFAULT_START_DATE_FROM});
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
