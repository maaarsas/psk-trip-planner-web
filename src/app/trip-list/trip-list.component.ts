import {Component} from '@angular/core';
import {TripService} from '../_services/trip.service';
import {Trip} from '../_models/trip';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent {

  trips: Trip[];

  constructor(private tripService: TripService) {
    this.tripService.getMyTrips().subscribe(trips => {
      this.trips = trips;
    });
  }
}
