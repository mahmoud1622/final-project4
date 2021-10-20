import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharedUi/navbar/navbar.component';
import { HomeComponent } from './sharedUi/home/home.component';
import { NotfoundComponent } from './sharedUi/notfound/notfound.component';
import { ListEmpComponent } from './Employees/list-emp/list-emp.component';
import { AddEmpComponent } from './Employees/add-emp/add-emp.component';
import{HttpClientModule}from "@angular/common/http"
import{FormsModule}from "@angular/forms";
import { UpdataComponent } from './Employees/updata/updata.component';
import { ListstudentComponent } from './student/liststudent/liststudent.component';
import { AddstudentComponent } from './student/addstudent/addstudent.component';
import { UpdatastudentComponent } from './student/updatastudent/updatastudent.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotfoundComponent,
    ListEmpComponent,
    AddEmpComponent,
    UpdataComponent,
    ListstudentComponent,
    AddstudentComponent,
    UpdatastudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
