import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFireList} from "@angular/fire/database";
import { AngularFireDatabase } from '@angular/fire/database';
import { observable } from 'rxjs';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id : any
  itemsList: AngularFireList<any>
  itemArray = [];

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


  constructor(public routeActivate:ActivatedRoute,public db:AngularFireDatabase, public router:Router) {

    this.routeActivate.params.subscribe(params=>
    {
      this.id= params
      console.log(this.id)
    });
    this.itemsList=db.list('boocks')
    this.itemsList.snapshotChanges().subscribe(actions=>{
      actions.forEach(action=>{
        let y=action.payload.toJSON()
        y["$key"]=action.key

        //console.log(action.key)

        if(action.key == this.id['id']){
          this.itemArray.push(y as itemListClass)

          this.boock_data.boock_autor=this.itemArray[0]['boock_autor']
            this.boock_data.boock_name=this.itemArray[0]['boock_name']
            this.boock_data.categorie=this.itemArray[0]['categorie']
            this.boock_data.date_storage=this.itemArray[0]['date_storage']
            this.boock_data.edition=this.itemArray[0]['edition']
            this.boock_data.picture=this.itemArray[0]['picture']
            this.boock_data.resume=this.itemArray[0]['resume']
            this.boock_data.email=this.itemArray[0]['email']
            console.log( this.itemArray[0]['boock_name'])

        }
      })
    })
    console.log(this.itemArray)

}

  ngOnInit() {
    console.log(this.id['id'])
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
  email:string;
}
