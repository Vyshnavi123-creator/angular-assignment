import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
  public getJsonValue:any;
  public postJsonValue:any;
  public deleteJsonValue:any;
  public putJsonValue:any;
  
  constructor(private http:HttpClient){}
  ngOnInit() :void{
    this.getMethod();
    this.postMethod();
    this.putMethod();
    // this.deleteMethod();
  }
   public getMethod(){
      this.http.get('http://localhost:8090/courses/2').subscribe((data)=>{
      // console.log("xyz");
      this.getJsonValue=data;
      });
   }
   public postMethod(){
    let body={
      id:1,
      title:"abc",
      description:"important1"
    }
    this.http.post('http://localhost:8090/courses',body).subscribe((data)=>{
      // console.log("xyz");
      this.postJsonValue=data;
      });
   }
   public deleteMethod(){
      this.http.delete('http://localhost:8090/courses/1').subscribe((data)=>{
      // console.log("xyz");
      this.deleteJsonValue=data;
      });
   }
   public putMethod(){
    let body={
      id:2,
      title:"pqr",
      description:"important2"
    }
    this.http.put('http://localhost:8090/courses/2',body).subscribe((data)=>{
      // console.log("xyz");
      this.putJsonValue=data;
      });
   }
}
