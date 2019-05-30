import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {OfficeService} from '../../_services/office.service';
import {Person, Trip, TripParticipation} from '../../_models/trip';
import {Office} from '../../_models/office';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {UserSearchService} from '../../_services/user-search.service';
import {UserService} from '../../_services/user.service';
import {User} from '../../_models/user';
import {TripService} from '../../_services/trip.service';

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.scss']
})
export class TripFormComponent implements OnInit {

  tripForm: FormGroup;

  public model: Person;

  offices: Office[];
  toOffice: Office;
  fromOffice: Office;
  dateTo: string;
  dateFrom: string;
  columns: string[];
  organizer: Person;
  user: User;

  searchResults: Person[];
  participants: TripParticipation[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private officeService: OfficeService,
    private searchService: UserSearchService,
    private userService: UserService,
    private tripService: TripService
  ) {
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(term => {
          if (term.trim() !== '' && term.trim().length >= 2) {
            const persons = this.searchService.search(term.trim()).pipe(map((foundPersons) => {
              this.searchResults = [...foundPersons].filter(p => !this.participants.map(part => part.id).includes(p.id));
              console.log(this.searchResults);
              return [...this.searchResults];
            }));
            return persons;
          } else {
            this.searchResults = [];
            return [];
          }
        }
      )
    )

  onTicketStatusChange(event, participation: TripParticipation) {
    this.participants.forEach(p => {
      if (p.participant.id === participation.participant.id) {
        p.flightTicketStatus = event.target.checked ? 'NEEDED' : 'NOT_NEEDED';
      }
    });
  }

  onRentalStatusChange(event, participation: TripParticipation) {
    this.participants.forEach(p => {
      if (p.participant.id === participation.participant.id) {
        p.carRentalStatus = event.target.checked ? 'NEEDED' : 'NOT_NEEDED';
      }
    });
  }

  onAccommodationStatusChange(event, participation: TripParticipation) {
    this.participants.forEach(p => {
      if (p.participant.id === participation.participant.id) {
        p.accommodationStatus = event.target.checked ? 'NEEDED' : 'NOT_NEEDED';
      }
    });
  }

  addPersonToTrip(person: Person) {
    if (this.model && this.searchResults.map(s => s.id).includes(person.id)) {
      this.participants.push({participant: person});
      this.model = null;
      this.searchResults = [];
    }
  }

  removeParticipant(person: Person) {
    this.participants = this.participants.filter(p => p.participant.id !== person.id);
  }

  ngOnInit() {
    this.createTripForm();
    this.officeService.getOffices().subscribe(response => {
      this.offices = response;
    });
    this.columns = ['Vardas', ''];
    this.userService.getCurrentUserActually().subscribe(user => this.user = user);
  }

  createTripForm() {
    this.tripForm = this.formBuilder.group({});
  }

  onSubmit() {
  }

  saveFromSelection(office: string) {
    this.fromOffice = this.offices.find(o => o.title === office.trim());
  }

  saveToSelection(office: string) {
    this.toOffice = this.offices.find(o => o.title === office.trim());
  }

  isFormDisabled() {
    return !(this.participants && this.participants.length && this.dateFrom && this.dateTo && this.fromOffice && this.toOffice);
  }

  submit() {

    this.organizer = {id: this.user.id, name: this.user.firstName, surname: this.user.lastName};


    const trip: Trip = {
      organizer: this.organizer,
      tripParticipations: this.participants,
      startDate: this.dateFrom,
      endDate: this.dateTo,
      fromOffice : this.fromOffice,
      toOffice: this.toOffice};

    this.tripService.createTrip(trip).subscribe(() => { console.log('yay'); }, () => { console.log('nay'); });
  }

  format = (x: {name: string}) => x.name;
}
