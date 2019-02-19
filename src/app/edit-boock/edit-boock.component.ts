import { Component, OnInit } from '@angular/core';
import {ActivateRoutes} from "@angular/router/src/operators/activate_routes";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-boock',
  templateUrl: './edit-boock.component.html',
  styleUrls: ['./edit-boock.component.css']
})
export class EditBoockComponent implements OnInit {

  constructor(public activateRouter:ActivatedRoute) {
    console.log(activateRouter.snapshot['$key'])
  }

  ngOnInit() {

  }

}
