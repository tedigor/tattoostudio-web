import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DateUtil } from 'src/app/shared/date-util/date-util';
import { Profissional } from '../../../profissionais/models/profissional.models';
import { Agendamento } from '../../models/agendamento.model';
import { Cliente } from '../../models/cliente.model';
import { AgendamentosService } from '../../services/agendamentos.service';

@Component({
  selector: 'app-form-agendamentos',
  templateUrl: './form-agendamentos.component.html',
  styleUrls: ['./form-agendamentos.component.css']
})
export class FormAgendamentosComponent implements OnInit {

  formAgendamento: FormGroup;
  clientesCadastrados: Cliente[];
  profissionalSelect: Profissional[];
  private dataUtil: DateUtil = new DateUtil()

  constructor(
    private fb: FormBuilder,
    private agendamentosService: AgendamentosService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.criarForm();
    this.profissionaisSelect();
    this.getClientesCadastrados();
  }

  profissionaisSelect() {
    this.agendamentosService.getProfissionais().subscribe(response => {
      this.profissionalSelect = response;
    });
  }

  getClientesCadastrados() {
    this.agendamentosService.getClientes().subscribe(response => {
      this.clientesCadastrados = response;
    });
  }

  criarForm() {
    this.formAgendamento = this.fb.group({
      profissional: [null, Validators.required],
      data: [null, Validators.required],
      hora: [null, Validators.required],
      servico: [null, Validators.required],
      cliente: [null, Validators.required],
    });
  }

  montarAgendamento(): Agendamento {

    const agendamento: Agendamento = {
      idProfissional: this.formAgendamento.get('profissional').value,
      idCliente: this.formAgendamento.get('cliente').value,
      servico: this.formatarServico(),
      horario: this.dataUtil.dateToTimeStamp(`${this.formAgendamento.get('data').value} ${this.formAgendamento.get('hora').value}`)
    }

    return agendamento;
  }

  salvarAgendamento() {

    this.agendamentosService.salvarAgendamento(this.montarAgendamento())
      .subscribe(
        () => {
          this.toastrService.success("Agendamento criado com Sucesso!");
          this.ngOnInit();
        }
      );

  }

  formatarServico() : string {
    const valor = this.formAgendamento.get('servico').value;
    return valor === "Tatuagem"? "TATOO" : "PIERCING"; 
  }

  cancelarAgendamento() {
    this.ngOnInit();
  }

}
