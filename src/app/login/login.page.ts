import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  LoginForm: FormGroup;
  isSubmitted: boolean;
  email: "teste@email.com";
  password: 'password';

  constructor(public formBuilder: FormBuilder, private router: Router, private routing: Router, private orientacao: ScreenOrientation, private menuCtrl: MenuController) {
    this.isSubmitted= false;
    this.orientacao.lock(this.orientacao.ORIENTATIONS.PORTRAIT);
      this.menuCtrl.enable(false);
   }

   //A função "ngOnInit" define quais são as validações a serem feitas para que o utilizador consiga continuar.
  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]]
    });
  }

  // A função "submitForm" verifica se todos os requesitos impostos pelo "Reactive Form" são cumpridos, e se fôr esse o caso leva o utilizador para outro ecrã.
  submitForm(){
    this.isSubmitted = true;
    if(!this.LoginForm.valid){
      return false;
    } else{
      this.router.navigate(['/home'])
    }
  }


  get formControls(){
    return this.LoginForm.controls;
  }

  // A função "onClick" leva o utilizador a outro ecrã.
  onClick () {
    this.routing.navigate(['/registo']);
  }

}
