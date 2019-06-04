import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Profissional } from '../models/profissional.models';
import { HttpClient } from '@angular/common/http';

const API = "http://localhost:8080/"

@Injectable()
export class ProfissionalService {

  constructor(private httpClient: HttpClient) { }

  salvarProfissional(profissional: Profissional): Observable<Profissional> {
    
    return this.httpClient.post<Profissional>(`${API}profissionais`, profissional);
  }
}
