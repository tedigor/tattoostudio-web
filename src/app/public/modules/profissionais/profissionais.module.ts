import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { FormProfissionaisComponent } from './components/form-profissionais/form-profissionais.component';
import { ProfissionaisRoutingModule } from './profissionais-routing.module';
import { ProfissionalService } from './services/profissional.service';


@NgModule({
  declarations: [FormProfissionaisComponent],
  imports: [
    CommonModule,
    ProfissionaisRoutingModule,
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
