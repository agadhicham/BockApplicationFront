import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string
  password: string
  uid: any
  constructor(private router:Router, private fire: AngularFireAuth) {

  }
  saveLogin(){
    this.fire.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(user=>
    {
      console.log(this.email , this.password)
      console.log('Nice, it worked! with this email:  ' +this.email)
      localStorage.setItem('isLogged','true')
      localStorage.setItem('email',this.fire.auth.currentUser.email)


      this.fire.authState.subscribe(auth=>{
        if (auth){
          localStorage.setItem('uid', auth.uid)

          console.log('uid: '+this.uid)
        }

      })





    this.router.navigate(['mybook'])
    }).catch(error=>{
      console.log('Something went wrong:',error);
      document.getElementById("error").innerHTML =
        error.name + "<br>" + error.message;


    })

  }

  ngOnInit() {
  }
}
