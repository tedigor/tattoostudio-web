import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisarConsultasComponent } from './components/pesquisar-consultas/pesquisar-consultas.component';
import { FormConsultasComponent } from './components/form-consultas/form-consultas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pesquisar',
    pathMatch: 'full'
  },
  {
    path: 'pesquisar',
    component: PesquisarConsultasComponent
  },
  {
    path: 'cadastrar',
    component: FormConsultasComponent
  },
  {
    path: ':id/editar',
    component: FormConsultasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasRoutingModule { }
