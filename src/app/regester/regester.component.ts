import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {BoockServiceService} from "../services/boock-service.service";
import { FormsModule }   from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {Boock} from "../model.boock/boock";
import {User} from "../model.user/user";

@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.css']
})
export class RegesterComponent implements OnInit {

   user:User=new  User();
  boock:Boock= new Boock ()


  email:string=''
  password:string=''
  constructor( private fare_regester_user:AngularFireAuth, private router:Router, regester: BoockServiceService) { }


  regesterUser(){

    this.fare_regester_user.auth.createUserWithEmailAndPassword(this.email,
    this.password).then(user=>{
      console.log(this.email)
      console.log(user)
      this.router.navigate(['myboocks'])
    }).catch(error=>{
      console.log(error)
    })
  }

  ngOnInit() {
  }

}
