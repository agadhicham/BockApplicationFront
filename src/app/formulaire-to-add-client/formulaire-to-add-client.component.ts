import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {
  AngularFireStorageModule, AngularFireStorageReference, AngularFireUploadTask,
  AngularFireStorage
} from "@angular/fire/storage";
import {Observable} from "rxjs";

@Component({
  selector: 'app-formulaire-to-add-client',
  templateUrl: './formulaire-to-add-client.component.html',
  styleUrls: ['./formulaire-to-add-client.component.css']
})
export class FormulaireToAddClientComponent implements OnInit {

  boock_data= {
    boock_autor:'',
    boock_name:'',
    date_storage:'',
    edition:'',
    resume:'',
    categorie:'',
    picture:''
  }

  refer:AngularFireStorageReference
  task: AngularFireUploadTask
  downoldUrl: Observable<number>

  itemList: AngularFireList<any>
  constructor(public db:AngularFireDatabase, public router:Router, private filestore:AngularFireStorage) {
    this.itemList = db.list('boocks')  }

  ngOnInit() {

  }

  upload(event){
    const id=Math.random().toString(36).substring(2);
    this.refer=this.filestore.ref(id);
    this.task=this.refer.put(event.target.files[0]);
    console.log('"""""""""""""""""""""""""""')
    this.downoldUrl=this.task.percentageChanges();
    console.log(this.downoldUrl)
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

      })
    this.router.navigate(['mybook']);
  }


}
