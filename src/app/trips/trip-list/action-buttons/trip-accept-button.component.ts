import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Trip } from '../../../_models/trip';
import { TripService } from '../../../_services/trip.service';
import { TripActionButton } from './trip-action-button';

@Component({
  selector: 'app-trip-accept-btn',
  template:
    '<button (click)="onAction()" class="btn btn-sm btn-success ml-2" [disabled]="loading || done">' +
      '<span *ngIf="!done">' +
        '<span *ngIf="loading" class="spinner-border spinner-border-sm"></span> {{ "trip-list-action.accept" | translate }}' +
      '</span>' +
      '<span *ngIf="done">{{ "trip-list-action.accept-done" | translate }}</span>' +
    '</button>'
})
export class TripAcceptButtonComponent implements TripActionButton {

  @Input()
  trip: Trip;

  loading = false;
  done = false;

  constructor(private tripService: TripService) { }

  onAction() {
    this.loading = true;
    this.tripService.acceptInvitation(this.trip).subscribe(
      value => {
        this.loading = false;
        this.done = true;
      },
      error => {
        this.loading = false;
      },
    );
  }

}
