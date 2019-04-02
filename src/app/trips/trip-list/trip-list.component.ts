import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Trip, TripParams} from '../../_models/trip';
import {DEFAULT_PAGE, DEFAULT_PAGE_SIZE, PAGE_SIZE_OPTIONS} from '../../_constants/trip-list.const';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent {

  @Input()
  trips: Trip[];

  @Input()
  showInvitationButtons: boolean;

  @Input()
  totalNumberOfTrips: number;

  @Input()
  collectionSize: number;

  @Output()
  accept = new EventEmitter<Trip>();

  @Output()
  decline = new EventEmitter<Trip>();

  @Output()
  paramsChange = new EventEmitter<TripParams>();

  page = DEFAULT_PAGE;
  pageSize = DEFAULT_PAGE_SIZE;
  pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor() {
  }

  onAccept(tripToAccept: Trip) {
    this.accept.emit(tripToAccept);
  }

  onDecline(tripToDecline) {
    this.decline.emit(tripToDecline);
  }

  onParamsChange() {
    this.paramsChange.emit({pageSize: this.pageSize, page: this.page});
  }

  onPageSizeChange(pageSize: number) {
    this.pageSize = pageSize;
    this.onParamsChange();
  }

  onPageChange(page: number) {
    this.page = page;
    this.onParamsChange();
  }

}
