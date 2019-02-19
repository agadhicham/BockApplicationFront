import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/auth";
import {User} from "../model.user/user";

@Component({
  selector: 'app-design-nav-bar',
  templateUrl: './design-nav-bar.component.html',
  styleUrls: ['./design-nav-bar.component.css']
})
export class DesignNavBarComponent implements OnInit {

  pass:string=''
  user:User=new User();
  email:string=''
  password:string=''
  constructor(public roueter:Router, private fare_regester_user:AngularFireAuth, private router:Router ) { }

  ngOnInit() {
  }
  regesterUser(){

    this.fare_regester_user.auth.createUserWithEmailAndPassword(this.email,
      this.password).then(user=>{
      console.log(this.email)
      console.log(user)
      this.router.navigate(['myboock'])
    }).catch(error=>{
      console.log(error)
    })
  }

  verefierPassword(){


  }
  toAdd(){
    this.roueter.navigate(['login'])
  }
  directLogin(){
    this.roueter.navigate(['login'])
  }
}
