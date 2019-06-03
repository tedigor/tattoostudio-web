import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginationModule } from 'ngx-bootstrap';
import { PaginacaoComponent } from './paginacao/paginacao.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    PaginacaoComponent,
    CardContainerComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    FormsModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    PaginacaoComponent,
    CardContainerComponent
  ]
})
export class SharedComponentsModule { }
