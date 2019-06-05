import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponentsModule } from '../shared/shared-components/shared-components.module';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';
import { PublicRoutingModule } from './public-routing.module';


@NgModule({
  declarations: [TelaInicialComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedComponentsModule,    
  ]
})
export class PublicModule { }
