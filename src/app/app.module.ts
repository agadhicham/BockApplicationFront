import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormulaireToAddClientComponent } from './formulaire-to-add-client/formulaire-to-add-client.component';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';


import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

import  {FormsModule} from '@angular/forms';

import {
  MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatSelectModule, MatIconModule,
  MatMenuPanel
} from '@angular/material';
import { MatSnackBarModule } from "@angular/material";
import {MatFormFieldModule} from '@angular/material/form-field';

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
import { FormBuilder, FormGroup } from '@angular/forms';
import {EditBoockComponent} from "./edit-boock/edit-boock.component";
import {AngularFireStorageModule, AngularFireUploadTask} from "@angular/fire/storage";
import { MatTableModule } from '@angular/material';

import {  ReactiveFormsModule } from '@angular/forms';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsComponent } from './details/details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
//import { HttpClientModule, HttpClient } from '@angular/common/http';
//import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
//import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const  reoute:Routes=[
  {
    path:'add',   component:FormulaireToAddClientComponent
  },
  {
    path:'enter', component:DesignNavBarComponent
  },
  {
    path:'home',  component:HomePageComponent
  },
  {
    path:'mybook',component:TableDataComponent
  },
  {
    path:'detail/:id',component:DetailsComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'userprofile',component:UserProfileComponent
  },
  {
    path:'edit/:$key',component:EditBoockComponent
  },
  {
    path:'regester',component:RegesterComponent
  },
  {
    pathMatch:'full', redirectTo:'/login',path:''
  }
]
//export function HttpLoaderFactory(http: HttpClient) {
 // return new TranslateHttpLoader(http);
//}

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
    EditBoockComponent,
    DetailsComponent,
    UserProfileComponent,


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
    MatTableModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatFormFieldModule



],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
