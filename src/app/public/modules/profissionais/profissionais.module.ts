import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { MedicosRoutingModule } from './profissionais-routing.module';
import { ProfissionalService } from './services/profissional.service';
import { FormProfissionaisComponent } from './components/form-profissionais/form-profissionais.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [FormProfissionaisComponent],
  imports: [
    CommonModule,
    MedicosRoutingModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ProfissionalService
  ]
})
export class ProfissionaisModule { }
