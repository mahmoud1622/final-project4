import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmpComponent } from './Employees/add-emp/add-emp.component';
import { ListEmpComponent } from './Employees/list-emp/list-emp.component';
import { UpdataComponent } from './Employees/updata/updata.component';
import { HomeComponent } from './sharedUi/home/home.component';
import { NotfoundComponent } from './sharedUi/notfound/notfound.component';
import { AddstudentComponent } from './student/addstudent/addstudent.component';
import { ListstudentComponent } from './student/liststudent/liststudent.component';
import { UpdatastudentComponent } from './student/updatastudent/updatastudent.component';


const routes: Routes = [
{path:"home" , component :HomeComponent},
{path:"" , component :HomeComponent},
{path:"listemp" , component :ListEmpComponent},
{path:"addemp" , component :AddEmpComponent},
{path:"updata/:id" , component :UpdataComponent},

{path:"liststud" , component :ListstudentComponent},
{path:"addstud" , component :AddstudentComponent},
{path:"updatastud/:id" , component :UpdatastudentComponent},
{path:"**" , component :NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
