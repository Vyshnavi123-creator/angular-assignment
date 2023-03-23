import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url:string="/assets/data/employees.json";
  constructor(private http:HttpClient) { }
  // getEmployees(){
  //   return [
  //     {"id":1,"name":"Vyshnavi","age":21},
  //     {"id":2,"name":"abc","age":15},
  //     {"id":3,"name":"xyz","age":19}

  //   ]
  // }
  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }
}
