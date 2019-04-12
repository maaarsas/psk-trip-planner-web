import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trip-task-status',
  template:
    '<div [ngSwitch]="taskStatus">' +
      '<span *ngSwitchCase="\'NOT_NEEDED\'" class="badge badge-secondary">' +
        '{{ \'trip-list.task-status.not-needed\' | translate }}' +
      '</span>' +
      '<span *ngSwitchCase="\'NEEDED\'" class="badge badge-warning">' +
        '{{ \'trip-list.task-status.needed\' | translate }}' +
      '</span>' +
      '<span *ngSwitchCase="\'ORDERED\'" class="badge badge-success">' +
        '{{ \'trip-list.task-status.ordered\' | translate }}' +
      '</span>' +
    '</div>'
})
export class TripTaskStatusComponent {

  @Input()
  taskStatus: string;

  constructor() { }
}
