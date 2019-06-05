import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { FormAgendamentosComponent } from './components/form-agendamentos/form-agendamentos.component';
import { PesquisarAgendamentosComponent } from './components/pesquisar-agendamentos/pesquisar-agendamentos.component';
import { ConsultasRoutingModule } from './consultas-routing.module';
import { AgendamentosService } from './services/agendamentos.service';


@NgModule({
  declarations: [
    PesquisarAgendamentosComponent,
    FormAgendamentosComponent
  ],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AgendamentosService
  ]
})
export class ConsultasModule { }
