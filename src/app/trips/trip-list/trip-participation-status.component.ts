import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trip-participation-status',
  template:
    '<div [ngSwitch]="participationStatus">' +
      '<span *ngSwitchCase="\'INVITED\'" class="badge badge-secondary">' +
        '{{ \'trip-list.trip-participation.invited\' | translate }}' +
      '</span>' +
      '<span *ngSwitchCase="\'ACCEPTED\'" class="badge badge-success">' +
        '{{ \'trip-list.trip-participation.accepted\' | translate }}' +
      '</span>' +
      '<span *ngSwitchCase="\'REJECTED\'" class="badge badge-danger">' +
        '{{ \'trip-list.trip-participation.rejected\' | translate }}' +
      '</span>' +
    '</div>'
})
export class TripParticipationStatusComponent {

  @Input()
  participationStatus: string;

  constructor() { }
}
