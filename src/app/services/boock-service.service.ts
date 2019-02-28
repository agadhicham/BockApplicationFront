import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class BoockServiceService {

  email:string=''
  password:string=''
  constructor( private fare_regester_user:AngularFireAuth, private router:Router) { }


  regesterUser(){

    this.fare_regester_user.auth.createUserWithEmailAndPassword(this.email,
      this.password).then(user=>{
      console.log(this.email)
      console.log(user)
      this.router.navigate(['mybook'])
    }).catch(error=>{
      console.log(error)
    })
  }

  saveLogin(){
    this.fare_regester_user.auth.signInWithEmailAndPassword(this.email, this.password).then(user=>
    {
      console.log(this.email , this.password)
      localStorage.setItem('isLoggedIn','true')
      this.router.navigate(['mybook'])
    }).catch(error=>{
      console.log(error);

    })

  }
  newRegester(){
    this.router.navigate(['regester'])
  }

}
