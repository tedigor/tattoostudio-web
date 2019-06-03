import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';
import { SharedComponentsModule } from '../shared/shared-components/shared-components.module';

@NgModule({
  declarations: [TelaInicialComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedComponentsModule
  ]
})
export class PublicModule { }
