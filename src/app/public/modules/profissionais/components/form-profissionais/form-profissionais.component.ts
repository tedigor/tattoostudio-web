import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Profissional } from '../../models/profissional.models';
import { ProfissionalService } from '../../services/profissional.service';

@Component({
  selector: 'app-form-profissionais',
  templateUrl: './form-profissionais.component.html',
})
export class FormProfissionaisComponent implements OnInit {

  formProfissional: FormGroup;

  constructor(
    private fb: FormBuilder,
    private profissionalService: ProfissionalService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.criarForm();
  }

  criarForm() {
    this.formProfissional = this.fb.group({
      nome: [null, Validators.required],
      especialidade: [null, Validators.required]
    });
  }

  salvarProfissional() {
    this.profissionalService.salvarProfissional(this.montarProfissional()).
      subscribe(
        (res) => {
          this.toastrService.success("Cadastrado com sucesso!");
        }
      );
  }

  montarProfissional() {
    const profissional: Profissional = {
      nome: this.formProfissional.get('nome'). value,
      especialidade: this.formProfissional.get('especialidade').value
    };
    return profissional;
  }

}
