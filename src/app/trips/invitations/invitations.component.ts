import {Component, OnInit} from '@angular/core';
import {Trip, TripParams} from '../../_models/trip';
import {TripService} from '../../_services/trip.service';
import {DEFAULT_PAGE, DEFAULT_PAGE_SIZE} from '../../_constants/trip-list.const';
import { TripAcceptButtonComponent } from '../trip-list/action-buttons/trip-accept-button.component';
import { TripActionButton } from '../trip-list/action-buttons/trip-action-button';
import { TripRejectButtonComponent } from '../trip-list/action-buttons/trip-reject-button.component';

@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.scss']
})
export class InvitationsComponent implements OnInit {

  invitations: Trip[];
  availableInvitations: number;
  actionButtons: TripActionButton[] = [TripAcceptButtonComponent, TripRejectButtonComponent];

  constructor(private tripService: TripService) {
    this.onParamsChange({pageSize: DEFAULT_PAGE_SIZE, page: DEFAULT_PAGE});
  }

  ngOnInit() {
  }

  onParamsChange(params: TripParams) {
    this.tripService.getMyInvitations(params).subscribe(invitationData => {
      this.invitations = invitationData.results;
      this.availableInvitations = invitationData.totalResultsCount;
    });
  }

}
