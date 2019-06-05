import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAgendamentosComponent } from './components/form-agendamentos/form-agendamentos.component';
import { PesquisarAgendamentosComponent } from './components/pesquisar-agendamentos/pesquisar-agendamentos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pesquisar',
    pathMatch: 'full'
  },
  {
    path: 'pesquisar',
    component: PesquisarAgendamentosComponent
  },
  {
    path: 'cadastrar',
    component: FormAgendamentosComponent
  },
  {
    path: ':id/editar',
    component: FormAgendamentosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasRoutingModule { }
