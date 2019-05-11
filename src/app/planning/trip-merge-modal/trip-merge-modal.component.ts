import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Trip } from '../../_models/trip';
import { TripService } from '../../_services/trip.service';

@Component({
  selector: 'app-trip-merge-modal-component',
  templateUrl: './trip-merge-modal.component.html',
  styleUrls: ['./trip-merge-modal.component.scss']
})
export class TripMergeModalComponent implements OnInit {

  private _toTrip: Trip;

  private mergeableTrips: Trip[];

  @Input() set toTrip(value: Trip) {
    this._toTrip = value;
    this.loadMergeableTrips();
  }

  get toTrip(): Trip {
    return this._toTrip;
  }

  constructor(public activeModal: NgbActiveModal, private tripService: TripService) {}

  ngOnInit() {}

  private loadMergeableTrips() {
    this.tripService.getMergeableTrips(this.toTrip).subscribe(trips => this.mergeableTrips = trips);
  }

  public getShortTripSummary(trip: Trip) {
    return trip.startDate + ' - ' + trip.endDate + ' | ' + trip.fromOffice.title + ' - ' + trip.toOffice.title;
  }

}
