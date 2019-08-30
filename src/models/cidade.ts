import { Estado } from './estado';


export class Cidade {
    id: number;
    nome: string;
    registro_ativo: boolean;
    estado: Estado;
}