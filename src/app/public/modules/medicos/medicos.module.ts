import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicosRoutingModule } from './medicos-routing.module';
import { FormMedicosComponent } from './components/form-medicos/form-medicos.component';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MedicosService } from './services/medicos.service';

@NgModule({
  declarations: [FormMedicosComponent],
  imports: [
    CommonModule,
    MedicosRoutingModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MedicosService
  ]
})
export class MedicosModule { }
