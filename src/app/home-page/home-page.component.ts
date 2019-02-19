import { Router } from '@angular/router';
import { AngularFireList } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { observable } from 'rxjs';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  boock_data= {
              boock_autor:'',
              boock_name:'',
              date_storage:'',
              edition:'',
              resume:'',
              categorie:'',
              picture:''
  }

  itemList: AngularFireList<any>
  constructor(public db:AngularFireDatabase, public router:Router) {
this.itemList = db.list('boocks')  }

  ngOnInit() {

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
     picture :      this.boock_data.picture
   })
            this.router.navigate(['/mybook']);
  }

}
