import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserSearchComponent} from '../../user-search/user-search.component';
import {HttpClientModule} from '@angular/common/http';

import {TripFormComponent} from './trip-form.component';

describe('TripFormComponent', () => {
  let component: TripFormComponent;
  let fixture: ComponentFixture<TripFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TripFormComponent, UserSearchComponent],
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
