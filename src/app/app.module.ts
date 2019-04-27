import {AppComponent} from './app.component';
import {MyOrganizedTripsComponent} from './planning/my-organized-trips/my-organized-trips.component';
import {MainNavigationComponent} from './main-navigation/main-navigation.component';
import {TripParticipationStatusComponent} from './trips/trip-list/trip-participation-status.component';
import {NgxdModule} from "@ngxd/core";
import {TripListComponent} from "./trips/trip-list/trip-list.component";
import {MyTripsComponent} from "./trips/my-trips/my-trips.component";
import {LoginComponent} from "./login/login.component";
import {InvitationsComponent} from "./trips/invitations/invitations.component";
import {NgModule} from "@angular/core";
import {UserSearchComponent} from "./user-search/user-search.component";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TripAcceptButtonComponent} from "./trips/trip-list/action-buttons/trip-accept-button.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TripEditComponent} from "./planning/trip-edit/trip-edit.component";
import {AppRoutingModule} from "./app-routing.module";
import {ErrorModalComponent} from "./error-modal/error-modal.component";
import {ErrorInterceptor} from "./_helpers/error.interceptor";
import {AllTripsComponent} from "./planning/all-trips/all-trips.component";
import {OfficeFormComponent} from "./admin/offices/office-form/office-form.component";
import {UsersComponent} from "./admin/users/users.component";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {OfficeListComponent} from "./admin/offices/office-list/office-list.component";
import {OfficesComponent} from "./admin/offices/offices.component";
import {UserSearchService} from "./_services/user-search.service";
import {TripService} from "./_services/trip.service";
import {TripRejectButtonComponent} from "./trips/trip-list/action-buttons/trip-reject-button.component";
import {TripFormComponent} from "./forms/trip-form/trip-form.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "./_helpers/jwt.interceptor";
import {NgbModule, NgbTypeaheadModule} from "@ng-bootstrap/ng-bootstrap";
import {BrowserModule} from "@angular/platform-browser";
import {TripCreateComponent} from "./planning/trip-create/trip-create.component";
import {TripTaskStatusComponent} from "./trips/trip-list/trip-task-status.component";


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
    UserSearchComponent,
    TripParticipationStatusComponent,
    TripTaskStatusComponent,
    TripAcceptButtonComponent,
    TripRejectButtonComponent,
    OfficeFormComponent,
    OfficeListComponent,
    ErrorModalComponent
  ],
  entryComponents: [
    TripAcceptButtonComponent,
    TripRejectButtonComponent,
    ErrorModalComponent
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
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
