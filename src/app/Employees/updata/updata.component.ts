import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { ApiFunctionsService } from 'src/app/shared/api-functions.service';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-updata',
  templateUrl: './updata.component.html',
  styleUrls: ['./updata.component.css']
})
export class UpdataComponent implements OnInit {
id;
  object = new Employee() ;

  constructor(private serv : EmployeeService , private router: Router, private activeroute :ActivatedRoute) { 
   this.id= this.activeroute.snapshot.paramMap.get('id');
    this.serv.getbyid(this.id).subscribe((data:any)=>{
      this.object = data;
    })
  }

  ngOnInit(): void {
  }

updata(){
  this.serv.put(this.object,this.id).subscribe(data=>{
   this.router.navigateByUrl("/listemp")
  })
}

}
