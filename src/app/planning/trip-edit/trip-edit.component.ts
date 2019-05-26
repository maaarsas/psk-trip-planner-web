import {Component} from '@angular/core';
import {Trip, TripParticipation} from '../../_models/trip';
import {ActivatedRoute} from '@angular/router';
import {TripService} from '../../_services/trip.service';

@Component({
  selector: 'app-trip-edit',
  templateUrl: './trip-edit.component.html',
  styleUrls: ['./trip-edit.component.scss']
})
export class TripEditComponent {

  trip: Trip;

  constructor(
    private route: ActivatedRoute,
    private tripService: TripService
  ) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tripService.getTripById(id).subscribe(trip => {
      this.trip = trip;
    });
  }

  updateItemPrice(event, participation: TripParticipation, type: string) {
    const updatedTrip: Trip = JSON.parse(JSON.stringify(this.trip));
    updatedTrip.tripParticipations.find(p => p.id === participation.id)[type] = +event.target.price.value;
    this.updateTrip(updatedTrip);
  }

  setItemAsOrdered(participation, type: string) {
    const updatedTrip: Trip = JSON.parse(JSON.stringify(this.trip));
    updatedTrip.tripParticipations.find(p => p.id === participation.id)[type] = 'ORDERED';
    this.updateTrip(updatedTrip);
  }

  updateTrip(updatedTrip: Trip) {
    console.log(updatedTrip);
    this.tripService.updateTrip(updatedTrip).subscribe(trip => {
      this.trip = trip;
    });
  }

}
