import {Component, OnInit} from '@angular/core';
import {Trip, TripParams} from '../../_models/trip';
import {TripService} from '../../_services/trip.service';
import {DEFAULT_PAGE, DEFAULT_PAGE_SIZE} from '../../_constants/trip-list.const';

@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.scss']
})
export class InvitationsComponent implements OnInit {

  invitations: Trip[];
  availableInvitations: number;

  constructor(private tripService: TripService) {
    this.onParamsChange({pageSize: DEFAULT_PAGE_SIZE, page: DEFAULT_PAGE});
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
