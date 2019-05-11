import {Component, EventEmitter, Output} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Office} from '../../../_models/office';

@Component({
  selector: 'app-office-form',
  templateUrl: './office-form.component.html',
  styleUrls: ['./office-form.component.scss']
})
export class OfficeFormComponent {

  @Output() submitForm = new EventEmitter<Office>();

  officeForm = this.formBuilder.group({
    title: ['', Validators.required],
    maxCapacity: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    this.submitForm.emit(this.officeForm.value);
    this.officeForm.reset();
  }
}
