import { Injectable } from '@angular/core';
import { MedicosSelect } from '../models/medicos-select.model';
import { of } from 'rxjs';
import { Consulta } from '../models/consulta.model';

@Injectable()
export class ConsultasService {

  constructor() { }

  getMedicos() {
    const medicos: Array<MedicosSelect> = [
      {
        id: 0,
        nome: 'José'
      },
      {
        id: 1,
        nome: 'Xico'
      },
      {
        id: 2,
        nome: 'João'
      },
      {
        id: 3,
        nome: 'Maria'
      }
    ];

    return of(medicos);
  }

  getConsultas() {
    const consultas: Array<Consulta> = new Array();

    for (let index = 0; index < 18; index++) {
      const element: Consulta = {
        medico: `Medico ${index}`,
        id: index,
        data: '28/05/2019',
        hora: '18:38'
      };
      consultas.push(element);
    }

    return of(consultas);
  }
}
