import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NODATA } from 'dns';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage implements OnInit {

  MetodosForm: FormGroup;
  isSubmitted: boolean;

  constructor(public formBuilder: FormBuilder, private router: Router) {

    this.isSubmitted= false;
  }

  ngOnInit() {

    this.MetodosForm = this.formBuilder.group({

        numCartao: ['', [Validators.required], [Validators.minLength(16)], [Validators.maxLength(16)]],
        dataExp: ['', [Validators.required], [Validators.pattern('^[0-1]+[1-9]+/[0-9]+[0-9]')]],
        CVV:['', [Validators.required], [Validators.pattern('^[0-9]+[0-9]+[0-9]')]],
        nomeProp:['', [Validators.required]]
    });

  }

  submitForm(){
    this.isSubmitted = true;
    if(!this.MetodosForm.valid){
      return false;
    } else{
      
    }
  }


  get formControls(){
    return this.MetodosForm.controls;
  }

}
