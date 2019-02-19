import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/auth";
import {User} from "../model.user/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User=new  User();
  email: string
  password: string
  constructor(private router:Router, private fire: AngularFireAuth) {

  }
  saveLogin(){
    this.fire.auth.signInWithEmailAndPassword(this.email, this.password).then(user=>
    {
      console.log(this.email , this.password)
      localStorage.setItem('isLoggedIn','true')
      this.router.navigate(['mybooks'])
    }).catch(error=>{
      console.log(error);

    })

  }

  ngOnInit() {
  }
}
