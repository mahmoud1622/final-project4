import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.css']
})
export class ListstudentComponent  {

  allData : [];
  constructor(private serv : StudentService , private router:Router) { 
    this.serv.getEmployees().subscribe((data : any)=>{
      this.allData = data
      
    });
  }

remove(id){
  this.serv.delete(id).subscribe(data=>{
    window.location.reload();
  })
}


}
