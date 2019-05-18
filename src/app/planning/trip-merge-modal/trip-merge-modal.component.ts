import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Trip } from '../../_models/trip';
import { TripService } from '../../_services/trip.service';

@Component({
  selector: 'app-trip-merge-modal-component',
  templateUrl: './trip-merge-modal.component.html',
  styleUrls: ['./trip-merge-modal.component.scss']
})
export class TripMergeModalComponent implements OnInit {

  private loading = false;
  public finished = false;
  private mergeableTrips: Trip[];
  private selectedMergeableTrip: Trip;
  private _toTrip: Trip;

  @Input() set toTrip(value: Trip) {
    this._toTrip = value;
    this.loadMergeableTrips();
  }

  get toTrip(): Trip {
    return this._toTrip;
  }

  constructor(public activeModal: NgbActiveModal, private tripService: TripService) {}

  ngOnInit() {}

  onSubmit() {
    this.loading = true;
    this.tripService.mergeTrips(this.toTrip, this.selectedMergeableTrip).subscribe(
      data => {
        this.loading = false;
        this.finished = true;
      }
    );
  }

  private loadMergeableTrips() {
    this.tripService.getMergeableTrips(this.toTrip).subscribe(trips => this.mergeableTrips = trips);
  }

  public getShortTripSummary(trip: Trip) {
    return '#' + trip.id + ' '
      + trip.startDate + ' - ' + trip.endDate + ' | '
      + trip.fromOffice.title + ' - ' + trip.toOffice.title;
  }

}
