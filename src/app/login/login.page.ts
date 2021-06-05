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

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]]
    });
  }

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

  onClick () {
    this.routing.navigate(['/registo']);
  }

}
