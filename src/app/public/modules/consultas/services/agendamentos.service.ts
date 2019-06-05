
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profissional } from '../../profissionais/models/profissional.models';
import { Cliente } from '../models/cliente.model';
import { Agendamento } from '../models/agendamento.model';

const API = "http://localhost:8080/"

@Injectable({
  providedIn: 'root'
})
export class AgendamentosService {

  constructor(private httpClient: HttpClient) { }

  getProfissionais(): Observable<Profissional[]> {
    return this.httpClient.get<Profissional[]>(`${API}profissionais`);
  }

  getClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(`${API}clientes`);
  }

  getCliente(id: number): Observable<Cliente> {
    return  this.httpClient.get<Cliente>(`${API}clientes/${id}`);
  }

  salvarAgendamento(agendamento: Agendamento) : Observable<Agendamento> {
    return this.httpClient.post<Agendamento>(`${API}agendamentos`, agendamento);
  }
}
