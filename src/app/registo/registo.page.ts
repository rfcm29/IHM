import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registo',
  templateUrl: './registo.page.html',
  styleUrls: ['./registo.page.scss'],
})
export class RegistoPage implements OnInit {

  RegistoForm: FormGroup;
  isSubmitted: boolean;
  email: "teste@email.com";
  password: 'password';

  constructor(public formBuilder: FormBuilder, private router: Router) {
    this.isSubmitted= false;
   }

  ngOnInit() {
    this.RegistoForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]]
    });
  }

  submitForm(){
    this.isSubmitted = true;
    if(!this.RegistoForm.valid){
      return false;
    } else{
      this.router.navigate(['/home'])
    }
  }


  get formControls(){
    return this.RegistoForm.controls;
  }

}