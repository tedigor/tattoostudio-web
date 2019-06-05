import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';

const routes: Routes = [
  {
    path: 'tela-inicial',
    component: TelaInicialComponent
  },
  {
    path: 'profissionais',
    loadChildren: './modules/profissionais/profissionais.module#ProfissionaisModule'
  },
  {
    path: 'agendamentos',
    loadChildren: './modules/consultas/agendamentos.module#AgendamentosModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
