import { Component, OnInit } from '@angular/core';
import {AngularFireList} from "@angular/fire/database";
import { AngularFireDatabase } from '@angular/fire/database';
import { observable } from 'rxjs';
import {Router} from "@angular/router";
@Component({
  selector: 'app-myboocks',
  templateUrl: './myboocks.component.html',
  styleUrls: ['./myboocks.component.css']
})
export class MyboocksComponent implements OnInit {

  itemsList: AngularFireList<any>
  itemArray = []

  boock_data={
    boock_autor:  '',
    boock_name:   '',
    categorie:  '',
    date_storage:  '',
    edition:  '',
    picture:  '',
    resume: ''

  }


  constructor(public db:AngularFireDatabase, public router:Router) {
    this.itemsList=db.list('boocks')
    this.itemsList.snapshotChanges().subscribe(actions=>{
      actions.forEach(action=>{
        let y=action.payload.toJSON()
        y["$key"]=action.key
        this.itemArray.push(y as itemListClass)
      })
    })
    console.log(this.itemArray)

  }

  ngOnInit() {
  }

  deleteBook($key){
    this.itemsList.remove($key)
    this.itemArray=[]
    this.router.navigate(['mybook']);
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
    console.log("deleting ...........................")

  }

  upBoock($key){


    this.boock_data.boock_autor
    this.boock_data.boock_name
    this.boock_data.categorie
    this.boock_data.date_storage
    this.boock_data.edition
    this.boock_data.picture
    this.boock_data.resume


    this.itemsList.set($key,{
      boock_autor:    this.boock_data.boock_autor,
      boock_name :    this.boock_data.boock_name,
      categorie:      this.boock_data.categorie,
      date_storage:   this.boock_data.date_storage,
      edition :       this.boock_data.edition,
      picture :       this.boock_data.picture,
      resume :        this.boock_data.resume

    })
    this.itemArray = []
    this.router.navigate(['mybook']);

  }


  editeForme($key){

    for(let value of this.itemArray){
      if (value['$key'] == $key) {
        console.log(value['$key'])
        console.log(value)
        this.boock_data.boock_autor = value['boock_autor'];
        this.boock_data.boock_name = value['boock_name'];
        this.boock_data.categorie = value['categorie'];
        this.boock_data.date_storage = value['date_storage'];
        this.boock_data.edition = value['edition'];
        this.boock_data.picture = value['picture'];
        this.boock_data.resume = value['resume'];


      }

    }
  }





}
export class itemListClass {

  $key: string ;
  boock_autor:string;
  boock_name:  string ;
  date_storage: string;
  edition:string;
  resume:string;
  categorie:string;
  picture:string;
}
