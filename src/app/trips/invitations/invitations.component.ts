import {Component, OnInit} from '@angular/core';
import {Trip, TripParams} from '../../_models/trip';
import {TripService} from '../../_services/trip.service';
import { DEFAULT_PAGE, DEFAULT_RESULTS_PER_PAGE, DEFAULT_START_DATE_FROM } from '../../_constants/trip-list.const';

@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.scss']
})
export class InvitationsComponent implements OnInit {

  invitations: Trip[] = [];
  availableInvitations: number;

  constructor(private tripService: TripService) {
    this.onParamsChange({resultsPerPage: DEFAULT_RESULTS_PER_PAGE, page: DEFAULT_PAGE, startDateFrom: DEFAULT_START_DATE_FROM});
  }

  ngOnInit() {
  }

  onAccept(acceptedInvitation: Trip) {
    this.tripService.acceptInvitation(acceptedInvitation);
  }

  onDecline(declinedInvitation: Trip) {
    this.tripService.declineInvitation(declinedInvitation);
  }

  onParamsChange(params: TripParams) {
    this.tripService.getMyInvitations(params).subscribe(invitationData => {
      this.invitations = invitationData.results;
      this.availableInvitations = invitationData.totalResultsCount;
    });
  }

}
