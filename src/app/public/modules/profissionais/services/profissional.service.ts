import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Profissional } from '../models/profissional.models';
import { HttpClient } from '@angular/common/http';

const API = "http://localhost:8080/"

@Injectable()
export class ProfissionalService {

  constructor(private httpCliente: HttpClient) { }

  salvarProfissional(profissional: Profissional): Observable<Profissional> {
    
    return this.httpCliente.post<Profissional>(`${API}profissionais`, profissional);
  }
}
