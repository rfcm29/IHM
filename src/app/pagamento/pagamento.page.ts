import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PagamentoService } from '../services/pagamento.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage implements OnInit {

  MetodosForm: FormGroup;
  isSubmitted: boolean;
  cartao: boolean;
  paypal: boolean;
  transferencia: boolean;
  voucher: boolean;

  constructor(public formBuilder: FormBuilder, private router: Router, private pagamentoServ: PagamentoService, private toastController: ToastController) {
    this.cartao = false;
    this.paypal = false;
    this.transferencia = false;
    this.voucher = false;
    this.isSubmitted= false;
  }

  // A função "ngOnInit" define quais as validações a serem feitas na introdução dos dados do metodo de pagamento.
  ngOnInit() {
    this.MetodosForm= this.formBuilder.group({
        numCartao: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
        dataExp: ['', [Validators.required, Validators.pattern('^[0-3]+[0-9]+/+[0-1]+[0-9]$')]],
        cVV:['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
        nomeProp:['', [Validators.required]]
    });
  }

  // A função "onChange" vai mudar o que se apresenta ao utilizador para a inserção de dados dependendo de qual metodo de pagamento ele selecionar.
  onChange($event) {
    if($event.target.value == 'cartao'){
      this.cartao = true;
      this.paypal = false;
      this.transferencia = false;
      this.voucher = false;
    } else if($event.target.value == 'paypal' ){
      this.cartao = false;
      this.paypal = true;
      this.transferencia = false;
      this.voucher = false;
    } else if($event.target.value == 'transferencia' ){
      this.cartao = false;
      this.paypal = false;
      this.transferencia = true;
      this.voucher = false;
    } else if($event.target.value == 'voucher' ){
      this.cartao = false;
      this.paypal = false;
      this.transferencia = false;
      this.voucher = true;
    }
  }

  // A função "submitForm" verifica se todos os requesitos impostos pelo "Reactive Form" são cumpridos, se fôr esse o caso guarda as informações do metodo de pagamento adicionado, informa o utilizador que o metodo foi adicionado e redireciona-o para outro ecrã.
  async submitForm(){
    this.isSubmitted = true;
    if(!this.MetodosForm.valid){
      return false;
    } else if(this.cartao==true){
      this.router.navigate(["/metodos"]);
      this.pagamentoServ.setPagamento(this.MetodosForm.value);
     const toast = await this.toastController.create({
        color: 'dark',
        duration: 2000,
        message: 'Pagamento adicionado com sucesso'
      });

      await toast.present();

      this.MetodosForm=null;
    }
  }

  get formControls(){
    return this.MetodosForm.controls;
  }

}
