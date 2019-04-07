import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TripCreateComponent} from './trip-create.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpLoaderFactory} from '../../app.module';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TripFormComponent} from '../../forms/trip-form/trip-form.component';
import {UserSearchComponent} from '../../user-search/user-search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';

describe('TripCreateComponent', () => {
  let component: TripCreateComponent;
  let fixture: ComponentFixture<TripCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TripCreateComponent, TripFormComponent, UserSearchComponent],
      imports: [FormsModule, ReactiveFormsModule, TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }), HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
