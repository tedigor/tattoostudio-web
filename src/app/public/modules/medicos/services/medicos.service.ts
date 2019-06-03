import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Medico } from '../models/medico.models';

@Injectable()
export class MedicosService {

  constructor() { }

  salvarMedico(medico: Medico) {
    console.log(medico);
    return of('Salvo com sucesso');
  }
}
