import { Login } from './login';
import { Cidade } from './cidade';


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

