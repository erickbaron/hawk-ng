import { Usuario } from './login';



export class Cliente {
     id: number;
     nome: string;
     cpf: string;
     dataNascimento: string;
     telefone: string;
     registroAtivo: boolean;
     login: Usuario;
}
