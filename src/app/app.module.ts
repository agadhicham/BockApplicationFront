import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormulaireToAddClientComponent } from './formulaire-to-add-client/formulaire-to-add-client.component';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';


import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

import  {FormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatSelectModule, MatIconModule} from '@angular/material';

//for fire bese
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { DesignNavBarComponent } from './design-nav-bar/design-nav-bar.component';
import { MyboocksComponent } from './myboocks/myboocks.component';
import { TableDataComponent } from './table-data/table-data.component';
import { LoginComponent } from './login/login.component';
import { RegesterComponent } from './regester/regester.component';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import {EditBoockComponent} from "./edit-boock/edit-boock.component";
import {AngularFireStorageModule, AngularFireUploadTask} from "@angular/fire/storage";
import { MatTableModule } from '@angular/material';

const  reoute:Routes=[
  {path:'add',   component:FormulaireToAddClientComponent},
  {path:'enter', component:DesignNavBarComponent},
  {path:'home',  component:HomePageComponent},
  {path:'mybook',component:TableDataComponent},
  {path:'login',component:LoginComponent},
  {path:'edit/:$key',component:EditBoockComponent},
  {path:'regester',component:RegesterComponent},
  {pathMatch:'full', redirectTo:'/home',path:'' }
]


@NgModule({
  declarations: [
    AppComponent,
    FormulaireToAddClientComponent,
    HomePageComponent,
    DesignNavBarComponent,
    MyboocksComponent,
    TableDataComponent,
    LoginComponent,
    RegesterComponent,
    EditBoockComponent


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(reoute),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
