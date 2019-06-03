import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConsultasService } from '../../services/consultas.service';
import { MedicosSelect } from '../../models/medicos-select.model';
import { Consulta } from '../../models/consulta.model';

@Component({
  selector: 'app-pesquisar-consultas',
  templateUrl: './pesquisar-consultas.component.html',
  styleUrls: ['./pesquisar-consultas.component.css']
})
export class PesquisarConsultasComponent implements OnInit {

  formPesquisa: FormGroup;
  medicosSelect: Array<MedicosSelect>;
  consultas: Array<Consulta>;

  constructor(
    private fb: FormBuilder,
    private consultasService: ConsultasService
  ) { }

  ngOnInit() {
    this.criarForm();
    this.recuperarMedicos();
  }

  criarForm() {
    this.formPesquisa = this.fb.group({
      medico: null,
      data: null
    });
  }

  recuperarMedicos() {
    this.consultasService.getMedicos().
      subscribe(
        (res) => {
          this.medicosSelect = res;
        }
      );
  }

  executarPesquisa() {
    this.consultasService.getConsultas().
      subscribe(
        (res) => {
          this.consultas = res;
        }
      );
  }

}
