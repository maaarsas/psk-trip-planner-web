import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Trip } from '../../_models/trip';

@Component({
  selector: 'app-trip-merge-modal-component',
  templateUrl: './trip-merge-modal.component.html',
  styleUrls: ['./trip-merge-modal.component.scss']
})
export class TripMergeModalComponent implements OnInit {

  @Input() toTrip: Trip;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}

}
