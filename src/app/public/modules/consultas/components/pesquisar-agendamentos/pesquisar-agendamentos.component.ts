import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Agendamento } from '../../models/agendamento.model';
import { AgendamentosService } from '../../services/agendamentos.service';

@Component({
  selector: 'app-pesquisar-agendamentos',
  templateUrl: './pesquisar-agendamentos.component.html',
  styleUrls: ['./pesquisar-agendamentos.component.css']
})
export class PesquisarAgendamentosComponent implements OnInit {

  formPesquisa: FormGroup;
  agendamentos: Array<Agendamento>;

  constructor(
    private fb: FormBuilder,
    private agendamentosService: AgendamentosService
  ) { }

  ngOnInit() {
    this.criarForm();
  }

  criarForm() {
    this.formPesquisa = this.fb.group({
      medico: null,
      data: null
    });
  }

  executarPesquisa() {
    // this.agendamentosService.getProfissionais().
    //   subscribe(
    //     (res) => {
    //       this.agendamentos = res;
    //     }
    //   );
  }

}
