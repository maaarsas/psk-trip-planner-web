import { Component, OnInit } from '@angular/core';
import {DemoService} from '../_services/demo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private demo: DemoService) { }

  ngOnInit() {
    this.demo.demo();
  }

}
