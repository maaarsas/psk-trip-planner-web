import {Component, EventEmitter, Input, Output} from '@angular/core';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Trip } from '../../../_models/trip';
import { TripService } from '../../../_services/trip.service';
import { TripMergeModalComponent } from '../../../planning/trip-merge-modal/trip-merge-modal.component';
import { TripActionButton } from './trip-action-button';

@Component({
  selector: 'app-trip-accept-btn',
  template:
    '<button (click)="onAction()" class="btn btn-sm btn-info ml-2" [disabled]="loading || done">' +
      '<span *ngIf="!done">' +
        '<span *ngIf="loading" class="spinner-border spinner-border-sm"></span> {{ "trip-list-action.merge" | translate }}' +
      '</span>' +
      '<span *ngIf="done">{{ "trip-list-action.merge-done" | translate }}</span>' +
    '</button>'
})
export class TripMergeButtonComponent implements TripActionButton {

  @Input()
  trip: Trip;

  loading = false;
  modalRef: NgbModalRef;

  constructor(private tripService: TripService, private modalService: NgbModal) { }

  onAction() {
    const options: NgbModalOptions = { beforeDismiss: () => {
      if (this.modalRef.componentInstance.finished) {
        window.location.reload();
      }
      return true;
    }};
    this.modalRef = this.modalService.open(TripMergeModalComponent, options);
    this.modalRef.componentInstance.toTrip = this.trip;
  }

}
