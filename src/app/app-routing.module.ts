import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'computadores',
    loadChildren: () => import('./computadores/computadores.module').then( m => m.ComputadoresPageModule)
  },
  {
    path: 'mobilidade',
    loadChildren: () => import('./mobilidade/mobilidade.module').then( m => m.MobilidadePageModule)
  },
  {
    path: 'imagem-som',
    loadChildren: () => import('./imagem-som/imagem-som.module').then( m => m.ImagemSomPageModule)
  },
  {
    path: 'perifericos',
    loadChildren: () => import('./perifericos/perifericos.module').then( m => m.PerifericosPageModule)
  },
  {
    path: 'armazenamento',
    loadChildren: () => import('./armazenamento/armazenamento.module').then( m => m.ArmazenamentoPageModule)
  },
  {
    path: 'redes-comunicacao',
    loadChildren: () => import('./redes-comunicacao/redes-comunicacao.module').then( m => m.RedesComunicacaoPageModule)
  },
  {
    path: 'eletrodomesticos',
    loadChildren: () => import('./eletrodomesticos/eletrodomesticos.module').then( m => m.EletrodomesticosPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'show-info',
    loadChildren: () => import('./show-info/show-info.module').then( m => m.ShowInfoPageModule)
  },
  {
    path: 'pagamento',
    loadChildren: () => import('./pagamento/pagamento.module').then( m => m.PagamentoPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
