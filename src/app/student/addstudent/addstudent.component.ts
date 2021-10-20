import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  object = new Student();

  constructor(private serv :StudentService, private router: Router) { }

  ngOnInit(): void {
  }

save(){
  this.serv.post(this.object).subscribe(data=>{
   this.router.navigateByUrl('/liststud')
  })
}

}
