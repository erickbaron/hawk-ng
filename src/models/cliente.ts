import { Login } from './login';



export class Cliente {
     id: number;
     nome: string;
     cpf: string;
     data_nascimento: string;
     cidade: string;
     logradouro: string;
     numero: number;
     complemento: string;
     cep: string;
     celular: string;
     registro_ativo: boolean;
     login: Login;
}
