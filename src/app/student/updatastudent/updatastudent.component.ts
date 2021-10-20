import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-updatastudent',
  templateUrl: './updatastudent.component.html',
  styleUrls: ['./updatastudent.component.css']
})
export class UpdatastudentComponent implements OnInit {
id;
object = new Student() ;

constructor(private serv :StudentService , private router: Router, private activeroute :ActivatedRoute) { 
 this.id= this.activeroute.snapshot.paramMap.get('id');
  this.serv.getbyid(this.id).subscribe((data:any)=>{
    this.object = data;
  })
}

ngOnInit(): void {
}

updata(){
this.serv.put(this.object,this.id).subscribe(data=>{
 this.router.navigateByUrl("/liststud")
})
}

}
