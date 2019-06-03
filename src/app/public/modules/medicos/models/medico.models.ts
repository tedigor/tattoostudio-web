import { Consultorio } from './consultorio.model';

export interface Medico {
    id?: number;
    nome: string;
    especialidade: string;
    consultorio: Consultorio;
}
