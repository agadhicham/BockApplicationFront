import { Component, OnInit } from '@angular/core';
import {AngularFireList, AngularFireDatabase} from "@angular/fire/database";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  itemsList: AngularFireList<any>
  itemArray = [];

  email:string;
  myUid:string;

  boock_data={
    boock_autor:'',
    boock_name: '',
    categorie:'',
    date_storage:'',
    edition:'',
    picture:'',
    resume:'',
    email:''
  }


  constructor(public db:AngularFireDatabase, public router:Router) {

    this.email= localStorage.getItem('email')
    this.myUid=localStorage.getItem('uid')

    this.itemsList=db.list('users')
    this.itemsList.snapshotChanges().subscribe(actions=>{
      actions.forEach(action=>{
        let y=action.payload.toJSON()
        y["$key"]=action.key
        //console.log(action.payload.toJSON())
        console.log(action.payload.child('uid').val())
        this.itemArray.push(y as itemListClass)

        if(action.key == this.myUid){
          this.itemArray.push(y as itemListClass)

          this.boock_data.boock_autor=this.itemArray[0]['boock_autor']
          this.boock_data.boock_name=this.itemArray[0]['boock_name']
          this.boock_data.categorie=this.itemArray[0]['categorie']
          this.boock_data.date_storage=this.itemArray[0]['date_storage']
          this.boock_data.edition=this.itemArray[0]['edition']
          this.boock_data.picture=this.itemArray[0]['picture']
          this.boock_data.resume=this.itemArray[0]['resume']
          this.boock_data.email=this.itemArray[0]['email']


        }
      })
    })

  }

  ngOnInit() {
    console.log(this.email)
    console.log(this.myUid)
    console.log(this.boock_data)
  }

}
export class itemListClass {
  boock_autor:string;
  boock_name:  string ;
  date_storage: string;
  edition:string;
  resume:string;
  categorie:string;
  picture:string;
  email:string
}
