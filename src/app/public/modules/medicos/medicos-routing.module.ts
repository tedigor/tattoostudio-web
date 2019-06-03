import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormMedicosComponent } from './components/form-medicos/form-medicos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cadastrar',
    pathMatch: 'full'
  },
  {
    path: 'cadastrar',
    component: FormMedicosComponent
  },
  {
    path: ':id/editar',
    component: FormMedicosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicosRoutingModule { }
