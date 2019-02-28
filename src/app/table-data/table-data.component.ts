import { Component, OnInit ,ViewChild} from '@angular/core';
import {AngularFireList} from "@angular/fire/database";
import { AngularFireDatabase } from '@angular/fire/database';
import { observable } from 'rxjs';
import {Router} from "@angular/router";
import {Boock} from "../model.boock/boock";
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {


  uid: any;

  pass:string=''
  // user:User=new User();
  email:string=''
  password:string=''
  isLogged: boolean= false;

  itemsList: AngularFireList<any>
  itemArray = [];
  boock:Boock=new Boock();
  myUid:any
  pageActuel: number=1;

  boock_data={
               boock_autor:'',
               boock_name: '',
               categorie:'',
               date_storage:'',
               edition:'',
               picture:'',
               resume:'',

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
    this.myUid= localStorage.getItem('uid')



  }

  ngOnInit() {
    this.myUid= localStorage.getItem('uid')
  }

  deleteBook($key){
    this.itemsList.remove($key)
    this.itemArray=[]
    this.router.navigate(['/mybook']);
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
    console.log("deleting ...........................")

  }

  showOneBock(){
window.location.reload()  //  this.router.navigate(['mybook']);
    }

  moreDetails($key){
   console.log($key)
    this.router.navigate(['detail',$key])
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
      boock_autor :    this.boock_data.boock_autor,
      boock_name :    this.boock_data.boock_name,
      categorie :      this.boock_data.categorie,
      date_storage :   this.boock_data.date_storage,
      edition :       this.boock_data.edition,
      picture :       this.boock_data.picture,
      resume :        this.boock_data.resume,
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
  boock_autor:string;
  boock_name:  string ;
  date_storage: string;
  edition:string;
  resume:string;
  categorie:string;
  picture:string;

}
