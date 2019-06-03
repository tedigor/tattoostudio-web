import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultasRoutingModule } from './consultas-routing.module';
import { PesquisarConsultasComponent } from './components/pesquisar-consultas/pesquisar-consultas.component';
import { FormConsultasComponent } from './components/form-consultas/form-consultas.component';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsultasService } from './services/consultas.service';

@NgModule({
  declarations: [
    PesquisarConsultasComponent,
    FormConsultasComponent
  ],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ConsultasService
  ]
})
export class ConsultasModule { }
