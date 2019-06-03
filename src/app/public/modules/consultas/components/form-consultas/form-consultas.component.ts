import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConsultasService } from '../../services/consultas.service';
import { MedicosSelect } from '../../models/medicos-select.model';

@Component({
  selector: 'app-form-consultas',
  templateUrl: './form-consultas.component.html',
  styleUrls: ['./form-consultas.component.css']
})
export class FormConsultasComponent implements OnInit {

  formConsulta: FormGroup;
  medicosSelect: Array<MedicosSelect>;

  constructor(
    private fb: FormBuilder,
    private consultasService: ConsultasService
  ) { }

  ngOnInit() {
    this.criarForm();
    this.recuperarMedicos();
  }

  criarForm() {
    this.formConsulta = this.fb.group({
      medico: [null, Validators.required],
      data: [null, Validators.required],
      hora: [null, Validators.required]
    });
  }

  salvarConsulta() {
    return;
  }

  recuperarMedicos() {
    this.consultasService.getMedicos().
      subscribe(
        (res) => {
          this.medicosSelect = res;
        }
      );
  }

}
