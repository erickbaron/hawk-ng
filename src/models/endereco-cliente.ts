import { Cliente } from "./cliente";


export class EnderecoCliente {
    id: number;
    estado: string;
    cidade: string;
    cep: string;
    complemento: string;
    numero: string;
    registro_ativo: boolean;
    cliente: Cliente;
}