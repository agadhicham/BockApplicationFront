import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/auth";
import {User} from "../model.user/user";
import {Observable} from "rxjs";

import * as firebase from 'firebase/app';
import {AngularFireList, AngularFireDatabase} from "@angular/fire/database";

@Component({
  selector: 'app-design-nav-bar',
  templateUrl: './design-nav-bar.component.html',
  styleUrls: ['./design-nav-bar.component.css']
})
 export class DesignNavBarComponent implements OnInit {
  boock_data= {
    boock_autor:'',
    boock_name:'',
    date_storage:'',
    edition:'',
    resume:'',
    categorie:'',
    picture:''
  }
  itemList: AngularFireList<any>;
  uid: any;

  pass:string=''
 // user:User=new User();
  email:string=''
  password:string=''
  isLogged: boolean= false;
  user: Observable<firebase.User>
  constructor( public fare_regester_user:AngularFireAuth, public router:Router , public db:AngularFireDatabase,  private fire: AngularFireAuth) {
    this.itemList = db.list('boocks')

    let user = localStorage.getItem('email');
    this.email= user
    console.log(user)
    console.log('*************************')

    this.uid= localStorage.getItem('uid')
    console.log('uidddd::: ' +this.uid)

    let status=localStorage.getItem('isLogged')
    console.log(status)

    if(status === "true")
    {
       this.isLogged=true;
    }
   else
    {
      this.isLogged=false;
    }



  }


  ngOnInit() {
  }
  regesterUser(){

    this.fare_regester_user.auth.createUserWithEmailAndPassword(this.email.trim(),
      this.password).then(user=>{
      console.log(this.email)
      console.log(user)
      this.router.navigate(['login'])
    }).catch(error=>{
      console.log(error)
    })
  }

  verefierPassword(){}

    logOut(){
      this.fare_regester_user.auth.signOut();
      this.isLogged=false
      localStorage.setItem('isLogged', 'false')
      this.router.navigate(['login'])
    }


  toAdd(){
    this.router.navigate(['login'])
  }
  directLogin(){
    this.router.navigate(['login'])
  }

  insertBoock(){
    this.itemList.push(
      {
        boock_autor:    this.boock_data.boock_autor,
        boock_name :    this.boock_data.boock_name,
        date_storage:  this.boock_data.date_storage,
        edition :      this.boock_data.edition,
        resume :       this.boock_data.resume,
        categorie:     this.boock_data.categorie,
        picture :      this.boock_data.picture,
        email :      this.email,
        uid: this.uid
      })
    this.router.navigate(['mybook']);
  }


}
