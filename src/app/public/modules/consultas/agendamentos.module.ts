import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { FormAgendamentosComponent } from './components/form-agendamentos/form-agendamentos.component';
import { PesquisarAgendamentosComponent } from './components/pesquisar-agendamentos/pesquisar-agendamentos.component';
import { ConsultasRoutingModule } from './agendamentos-routing.module';
import { AgendamentosService } from './services/agendamentos.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';


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
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [
    AgendamentosService
  ],
  exports: [MatTableModule]
})
export class AgendamentosModule { }
