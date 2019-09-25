import { Login } from './login';



export class Cliente {
     id: number;
     nome: string;
     cpf: string;
     data_nascimento: string;
     numero: number;
     complemento: string;
     logradouro: string;
     cep: string;
     celular: string;
     registro_ativo: boolean;
     login: Login;
     cidade: string;
}