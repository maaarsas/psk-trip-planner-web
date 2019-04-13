import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DEFAULT_PAGE } from '../../../_constants/list.const';
import { Office, OfficeParams } from '../../../_models/office';
import {
  DEFAULT_RESULTS_PER_PAGE,
  RESULTS_PER_PAGE_OPTIONS
} from '../../../_constants/list.const';

@Component({
  selector: 'app-office-list',
  templateUrl: './office-list.component.html',
  styleUrls: ['./office-list.component.scss']
})
export class OfficeListComponent {
  private _offices: Office[] = [];

  @Input() set offices(value: Office[]) {
    this._offices = value;
    this.loading = false;
  }

  get offices(): Office[] {
    return this._offices;
  }

  @Output()
  deleteOffice = new EventEmitter<Office>();

  @Output()
  editOffice = new EventEmitter<Office>();

  loading = false;

  constructor() {}

  onOfficeEdit(params, office: Office) {
    this.editOffice.emit({
      ...office,
      maxCapacity: params.target.maxCapacity.value
    });
  }

  onOfficeDelete(office: Office) {
    this.deleteOffice.emit(office);
  }
}
