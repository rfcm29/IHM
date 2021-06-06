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

   //A função "ngOnInit" define quais são as validações a serem feitas para que o utilizador consiga continuar.
  ngOnInit() {
    this.RegistoForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]]
    });
  }

  // A função "submitForm" verifica se todos os requesitos impostos pelo "Reactive Form" foram cumpridos e sendo esse o caso redireciona o utilizador para outro ecrã.
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

  // A função "onClick" redireciona o utilizador para outro ecrã.
  onClick () {
    this.router.navigate(['/login'])
  }


}