import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profissional } from '../../../profissionais/models/profissional.models';
import { Agendamento } from '../../models/agendamento.model';
import { AgendamentosService } from '../../services/agendamentos.service';

@Component({
  selector: 'app-pesquisar-agendamentos',
  templateUrl: './pesquisar-agendamentos.component.html',
  styleUrls: ['./pesquisar-agendamentos.component.css']
})
export class PesquisarAgendamentosComponent implements OnInit {

  formPesquisa: FormGroup;
  agendamentosList: Array<Agendamento>;
  profissionalSelect: Profissional[];
  constructor(
    private fb: FormBuilder,
    private agendamentosService: AgendamentosService
  ) { }

  ngOnInit() {
    this.criarForm();
    this.getProfissionalSelect();
  }
  

  criarForm() {
    this.formPesquisa = this.fb.group({
      profissional: [null, Validators.required],
      data: [null, Validators.required]
    });
  }


  getAgendamentosList() {
    this.agendamentosService.getQuery(this.formPesquisa.get('profissional').value, this.formPesquisa.get('data').value).subscribe(response => {
      this.agendamentosList = response;
      console.log(this.agendamentosList);
    })
  }

  getProfissionalSelect() {
    this.agendamentosService.getProfissionais().subscribe(response => {
      this.profissionalSelect = response;
    });
  }

  
  executarPesquisa() {
    this.getAgendamentosList();
  }

  limparTela() {
    this.agendamentosList = [];
    this.ngOnInit();
  }
}
