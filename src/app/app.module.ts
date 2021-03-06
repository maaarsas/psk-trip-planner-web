import {registerLocaleData} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {NgxdModule} from '@ngxd/core';
import {OfficeFormComponent} from './admin/offices/office-form/office-form.component';
import {OfficeListComponent} from './admin/offices/office-list/office-list.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ErrorModalComponent} from './error-modal/error-modal.component';
import {MainNavigationComponent} from './main-navigation/main-navigation.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from './_helpers/jwt.interceptor';
import {ErrorInterceptor} from './_helpers/error.interceptor';
import {TripAcceptButtonComponent} from './trips/trip-list/action-buttons/trip-accept-button.component';
import {TripEditButtonComponent} from './trips/trip-list/action-buttons/trip-edit-button.component';
import {TripMergeButtonComponent} from './trips/trip-list/action-buttons/trip-merge-button.component';
import {TripListComponent} from './trips/trip-list/trip-list.component';
import {TripService} from './_services/trip.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MyTripsComponent} from './trips/my-trips/my-trips.component';
import {InvitationsComponent} from './trips/invitations/invitations.component';
import {TripCreateComponent} from './planning/trip-create/trip-create.component';
import {TripEditComponent} from './planning/trip-edit/trip-edit.component';
import {MyOrganizedTripsComponent} from './planning/my-organized-trips/my-organized-trips.component';
import {AllTripsComponent} from './planning/all-trips/all-trips.component';
import {UsersComponent} from './admin/users/users.component';
import {OfficesComponent} from './admin/offices/offices.component';
import {TripFormComponent} from './forms/trip-form/trip-form.component';
import {UserSearchService} from './_services/user-search.service';
import {NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import {TripRejectButtonComponent} from './trips/trip-list/action-buttons/trip-reject-button.component';
import {TripParticipationStatusComponent} from './trips/trip-list/trip-participation-status.component';
import {TripTaskStatusComponent} from './trips/trip-list/trip-task-status.component';
import {TripDeclineButtonComponent} from './trips/trip-list/action-buttons/trip-decline-button.component';
import {UserListComponent} from './admin/users/user-list/user-list.component';
import {UserFormComponent} from './admin/users/user-form/user-form.component';
import {TripMergeModalComponent} from './planning/trip-merge-modal/trip-merge-modal.component';
import localeLt from '@angular/common/locales/lt';

registerLocaleData(localeLt);

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    LoginComponent,
    TripListComponent,
    MyTripsComponent,
    InvitationsComponent,
    TripCreateComponent,
    TripEditComponent,
    MyOrganizedTripsComponent,
    AllTripsComponent,
    UsersComponent,
    OfficesComponent,
    TripFormComponent,
    TripParticipationStatusComponent,
    TripTaskStatusComponent,
    TripAcceptButtonComponent,
    TripRejectButtonComponent,
    TripDeclineButtonComponent,
    TripMergeButtonComponent,
    TripEditButtonComponent,
    OfficeFormComponent,
    OfficeListComponent,
    ErrorModalComponent,
    UserListComponent,
    UserFormComponent,
    TripMergeModalComponent
  ],
  entryComponents: [
    TripAcceptButtonComponent,
    TripRejectButtonComponent,
    TripDeclineButtonComponent,
    TripMergeButtonComponent,
    TripEditButtonComponent,
    ErrorModalComponent,
    TripMergeModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    NgbTypeaheadModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgxdModule
  ],
  providers: [
    UserSearchService,
    TripService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: LOCALE_ID, useValue: 'lt-LT'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
