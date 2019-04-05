import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Trip, TripParams} from '../../_models/trip';
import {DEFAULT_PAGE, DEFAULT_PAGE_SIZE, PAGE_SIZE_OPTIONS, DEFAULT_START_DATE_FROM, DEFAULT_START_DATE_FROM_MODEL} from '../../_constants/trip-list.const';

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

  //datePickers' date models
  startDateFromModel = DEFAULT_START_DATE_FROM_MODEL;
  startDateToModel;
  endDateFromModel;
  endDateToModel;

  page = DEFAULT_PAGE;
  pageSize = DEFAULT_PAGE_SIZE;
  pageSizeOptions = PAGE_SIZE_OPTIONS;

  startDateFrom = DEFAULT_START_DATE_FROM;
  startDateTo: string;
  endDateFrom: string;
  endDateTo: string;

  constructor() {
  }

  onAccept(tripToAccept: Trip) {
    this.accept.emit(tripToAccept);
  }

  onDecline(tripToDecline) {
    this.decline.emit(tripToDecline);
  }

  onParamsChange() {
    this.paramsChange.emit({pageSize: this.pageSize, page: this.page,
          startDateFrom: this.startDateFrom, startDateTo: this.startDateTo, endDateFrom: this.endDateFrom, endDateTo: this.endDateTo});
  }

  onPageSizeChange(pageSize: number) {
    this.pageSize = pageSize;
    this.onParamsChange();
  }

  onPageChange(page: number) {
    this.page = page;
    this.onParamsChange();
  }

  onDateSelect(){
    this.updateDateParams();
    this.onParamsChange();
  }

  onPreviousSelect(){
    let yesterday = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));

    this.startDateFromModel = null;
    this.startDateToModel = null;
    this.endDateFromModel = null;
    this.endDateToModel = {year: yesterday.getFullYear(), month: yesterday.getMonth()+1, day: yesterday.getDay()};

    this.updateDateParams();
    this.onParamsChange();
  }

  onCurrentSelect(){
    let today = new Date();

    this.startDateFromModel = null;
    this.startDateToModel = {year: today.getFullYear(), month: today.getMonth()+1, day: today.getDay()};
    this.endDateFromModel = {year: today.getFullYear(), month: today.getMonth()+1, day: today.getDay()};
    this.endDateToModel = null;

    this.updateDateParams();
    this.onParamsChange();
  }

  onUpcomingSelect(){
    let tomorrow = new Date(new Date().getTime() + (24 * 60 * 60 * 1000));

    this.startDateFromModel = {year: tomorrow.getFullYear(), month: tomorrow.getMonth()+1, day: tomorrow.getDay()};
    this.startDateToModel = null;
    this.endDateFromModel = null;
    this.endDateToModel = null;

    this.updateDateParams();
    this.onParamsChange();
  }

  updateDateParams() {
    this.startDateFrom = this.fromModelToString(this.startDateFromModel);
    this.startDateTo = this.fromModelToString(this.startDateToModel);
    this.endDateFrom = this.fromModelToString(this.endDateFromModel);
    this.endDateTo = this.fromModelToString(this.endDateToModel);

  }

  fromModelToString(model){
    if(model!=null)  return model.year + "-" + ("0" + model.month).slice(-2) + "-" + ("0" + model.day).slice(-2);
    else return null;
  }
}
