import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../../../_models/trip';
import { TripActionButton } from './trip-action-button';

@Component({
  selector: 'app-trip-edit-btn',
  template:
    '<button (click)="onAction()" class="btn btn-sm btn-warning ml-2" [disabled]="loading || done">' +
      '<span *ngIf="!done">' +
        '<span *ngIf="loading" class="spinner-border spinner-border-sm"></span> {{ "trip-list-action.edit" | translate }}' +
      '</span>' +
      '<span *ngIf="done">{{ "trip-list-action.edit-done" | translate }}</span>' +
    '</button>'
})
export class TripEditButtonComponent implements TripActionButton {

  @Input()
  trip: Trip;

  loading = false;
  done = false;

  constructor(private router: Router) { }

  onAction() {
    this.loading = true;
    this.router.navigate(['/planning/edit/' + this.trip.id]);
    this.loading = false;
  }

}
