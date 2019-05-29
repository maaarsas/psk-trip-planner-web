import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {OfficeService} from '../../_services/office.service';
import {Office, Person} from '../../_models/trip';
import {Observable, of} from 'rxjs';
import {debounceTime, delay, distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {UserSearchService} from '../../_services/user-search.service';
import {resolve} from 'q';
import {async} from 'rxjs/internal/scheduler/async';

const names = ['Herkus', 'Greta', 'Povilas'];

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.scss']
})
export class TripFormComponent implements OnInit {

  tripForm: FormGroup;

  offices: Office[];
  toOffice: string;
  fromOffice: string;
  persons: Person[];
  personsNames: Observable<string[]>;
  alsoPersonsNames: string[];

  constructor(
    private formBuilder: FormBuilder,
    private officeService: OfficeService,
    private searchService: UserSearchService
  ) {
  }


  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(term => {
        if (term.trim() !== '' && term.trim().length >= 2) {
          this.personsNames = this.searchService.search(term.trim()).pipe(map((persons) => {
            const personsNames = [];
            for (const person of persons) {
              personsNames.push(person.name);
            }
            return personsNames;
          }));
          this.personsNames.subscribe(thing => console.log(thing));
          return this.personsNames.pipe();
          /*if (term.trim() !== '' && term.trim().length >= 2) {
            console.log('pradzia');
            console.log(this.personsNames);
            var o = this.getNames(term);
            this.persons = o;
            for (const person of this.persons) {
              this.personsNames.push(person.name);
            }
            return o.toPromise().then(response => {
              console.log('response');
              console.log(response);
              this.persons = response;
              for (const person of this.persons) {
                this.personsNames.push(person.name);
              }
              console.log('then');
              console.log(this.personsNames);
              // return this.personsNames.slice(0, 10);
              // return names;
            });

            // console.log('po subscribe');
            // console.log(result);
            // return this.personsNames;
            // return names;*/
          } else {
            return [];
          }
        }
      )
    )

  /*async getNames(term: string) {
    var o = await this.searchService.search(term.trim());
    this.persons = o;
  }*/

  ngOnInit() {
    this.createTripForm();
    this.officeService.getOffices().subscribe(response => {
      this.offices = response;
    });
  }

  createTripForm() {
    this.tripForm = this.formBuilder.group({});
  }

  onSubmit() {
  }

  saveFromSelection(selection: any) {
    this.fromOffice = selection;
  }

  saveToSelection(selection: any) {
    this.toOffice = selection;
  }
}
