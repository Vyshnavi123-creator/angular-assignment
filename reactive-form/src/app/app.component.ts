import { Component } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import {FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-form';
  //form builder is simpler alternative for form control and form group
  constructor(private fb:FormBuilder){}
  registrationForm=this.fb.group({
    userName:['',Validators.required],
    password:['',[Validators.required,Validators.minLength(5)]],
    confirmPassword:['']
  })

  //form module
  // registrationForm=new FormGroup({
  //   userName:new FormControl('Vyshnavi'),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl('')
  // })
  loadAPIData(){
    //set values for all form-controls
     this.registrationForm.setValue({
        userName:"xyz",
        password:"abc",
        confirmPassword:"abc"
     })
     //for only setting some form-controls
  //    this.registrationForm.patchValue({
  //     userName:"xyz",
  //     password:"abc",
  //  })
  }
}
