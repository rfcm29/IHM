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

  ngOnInit() {
    this.MetodosForm= this.formBuilder.group({
        numCartao: ['', [Validators.required], [Validators.minLength(16)], [Validators.maxLength(16)]],
        dataExp: ['', [Validators.required], [Validators.pattern('^[0-1]+[1-9]+/+[0-9]+[0-9]')]],
        cVV:['', [Validators.required], [Validators.pattern('^[0-9]+[0-9]+[0-9]')]],
        nomeProp:['', [Validators.required]]
    });
  }

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

  async submitForm(){
    this.isSubmitted = true;
    if(/*!this.MetodosForm.valid*/ false){
      return false;
    } else{
      this.router.navigate(["/metodos"]);
      this.pagamentoServ.setPagamento(this.MetodosForm.value);
      const toast = await this.toastController.create({
        color: 'dark',
        duration: 2000,
        message: 'Pagamento adicionado com sucesso'
      });

      await toast.present();
    }
  }

  get formControls(){
    return this.MetodosForm.controls;
  }

}
