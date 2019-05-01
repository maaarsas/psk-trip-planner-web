import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeSearchComponent } from './office-search.component';

describe('OfficeSearchComponent', () => {
  let component: OfficeSearchComponent;
  let fixture: ComponentFixture<OfficeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
