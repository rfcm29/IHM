import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  IHMForm: FormGroup;
  isSubmitted: boolean;

  constructor(public formBuilder: FormBuilder) {
    this.isSubmitted= false;
   }

  ngOnInit() {
    this.IHMForm= this.formBuilder.group({

      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z]{2,4}$')]],
      password: ['', [Validators.required]]
    });
  }

  submitForm(){
    this.isSubmitted = true;
    if(!this.IHMForm.valid){
      return false;
    } else{
      console.log(this.IHMForm.value);
    }
  }


  get formControls(){
    return this.IHMForm.controls;
  }

}
