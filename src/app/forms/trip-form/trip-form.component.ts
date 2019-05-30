import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {OfficeService} from '../../_services/office.service';
import {Person, TripParticipation} from '../../_models/trip';
import {Office} from '../../_models/office';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {UserSearchService} from '../../_services/user-search.service';
import {UserService} from '../../_services/user.service';
import {User} from '../../_models/user';

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
  persons: Person[] = new Array();
  columns: string[];
  tripParticipations: TripParticipation[];
  isPlane: boolean;
  isCar: boolean;
  isAccommodation: boolean;
  organizer: Person;
  user: User;

  constructor(
    private formBuilder: FormBuilder,
    private officeService: OfficeService,
    private searchService: UserSearchService,
    private userService: UserService
  ) {
  }


  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(term => {
          if (term.trim() !== '' && term.trim().length >= 2) {
            const persons = this.searchService.search(term.trim()).pipe(map((foundPersons) => {
              const personsNames = [];
              for (const person of foundPersons) {
                personsNames.push(person);
              }
              return personsNames;
            }));
            return persons;
          } else {
            return [];
          }
        }
      )
    )

  ngOnInit() {
    this.createTripForm();
    this.officeService.getOffices().subscribe(response => {
      this.offices = response;
    });
    this.columns = ['Vardas', ''];
    this.isAccommodation = false;
    this.isCar = false;
    this.isPlane = false;
    this.user = this.userService.getCurrentUser();
  }

  createTripForm() {
    this.tripForm = this.formBuilder.group({});
  }

  onSubmit() {
  }

  saveFromSelection(selection: Office) {
    this.fromOffice = selection;
    console.log(this.fromOffice);
  }

  saveToSelection(selection: Office) {
    this.toOffice = selection;
    console.log(this.toOffice);
  }

  addPerson(item: Person) {
    let isInList = false;
    for (const person of this.persons) {
      if (person.id === item.id) {
        isInList = true;
      }
    }
    if (!isInList) {
      this.persons.push(item);
    }
  }

  deletePerson(id: number) {
    for (const person of this.persons) {
      if (person.id === id) {
        this.persons = this.persons.filter(item => item !== person);
      }
    }
  }

  submit() {
    this.organizer.id = this.user.id;
    this.organizer.name = this.user.firstName;
    this.organizer.surname = this.user.lastName;
  }

  format = (x: {name: string}) => x.name;
}
