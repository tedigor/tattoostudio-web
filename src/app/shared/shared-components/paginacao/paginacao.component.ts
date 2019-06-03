import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.css']
})
export class PaginacaoComponent implements OnInit {

  @Input()
  totalItems: number;

  @Input()
  totalItemsPage: string;

  @Input()
  pageIndex: string;

  @Output() consultarPagina: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  novaPagina(event: any) {
    this.consultarPagina.next(event.page);
  }
}
