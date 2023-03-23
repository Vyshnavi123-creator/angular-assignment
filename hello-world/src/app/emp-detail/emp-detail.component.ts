import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-detail',
  template: `
     <h2>Employee List</h2>
     <ul *ngFor="let emp of employees">
         <li>{{emp.name}}</li>
     </ul>
  `,
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit{
  public employees:any[]=[];
    constructor(private _employeeService:EmployeeService){
      
    }
  ngOnInit(): void {
    //  this.employees=this._employeeService.getEmployees();
    this._employeeService.getEmployees().subscribe(data=>this.employees=data);
  }
}
