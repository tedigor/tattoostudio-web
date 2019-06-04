import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProfissionaisComponent } from './components/form-profissionais/form-profissionais.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cadastrar',
    pathMatch: 'full'
  },
  {
    path: 'cadastrar',
    component: FormProfissionaisComponent
  },
  {
    path: ':id/editar',
    component: FormProfissionaisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfissionaisRoutingModule { }
