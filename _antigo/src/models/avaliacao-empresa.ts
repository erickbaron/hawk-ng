import { Cliente } from './cliente';


export class AvaliacaoEmpresa {
    id: number;
    comentario_empresa: string;
    nota_empresa: number;
    registro_ativo: boolean;
    cliente: Cliente;
}