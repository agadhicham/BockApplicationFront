import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {BoockServiceService} from "../services/boock-service.service";
import { FormsModule }   from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {Boock} from "../model.boock/boock";
import {User} from "../model.user/user";
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.css']
})
export class RegesterComponent implements OnInit {



  ngOnInit() {

  }
   user:User=new  User();
  boock:Boock= new Boock ()

  email:string=''
  password:string=''
  passwordRepeated=''
  constructor( private fare_regester_user:AngularFireAuth, private router:Router, regester: BoockServiceService) { }


  regesterUser(){

    this.fare_regester_user.auth.createUserWithEmailAndPassword(this.email,
    this.password).then(user=>{
      console.log(this.email)
      console.log(user)
      console.log('Success!', user);
      if(this.password == this.passwordRepeated){
        this.router.navigate(['/mybook'])

      }
           else {
        this.router.navigate(['/regester'])
                }
    }).catch(error=>{
      console.log('Something went wrong:',error);
      document.getElementById("error").innerHTML =
        error.name + "<br>" + error.message;
    })
  }


}
