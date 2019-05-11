import {Component} from '@angular/core';
import {Office} from '../../_models/office';
import {OfficeService} from '../../_services/office.service';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.scss']
})
export class OfficesComponent {

  offices: Office[];

  constructor(private officeService: OfficeService) {
    this.getOffices();
  }

  onOfficeDelete(office: Office) {
    this.officeService.deleteOffice(office).subscribe(() => this.getOffices());
  }

  onOfficeAdd(office: Office) {
    this.officeService.addOffice(office).subscribe(() => this.getOffices());
  }

  onOfficeUpdate(office: Office) {
    this.officeService.updateOffice(office).subscribe(() => this.getOffices());
  }

  getOffices() {
    this.officeService.getOffices().subscribe(offices => {
      this.offices = offices;
    });
  }
}
