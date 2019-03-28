import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrganizedTripsComponent } from './my-organized-trips.component';

describe('MyOrganizedTripsComponent', () => {
  let component: MyOrganizedTripsComponent;
  let fixture: ComponentFixture<MyOrganizedTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOrganizedTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOrganizedTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
