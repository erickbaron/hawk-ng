import { Login } from './login';
import { Empresa } from './empresa';


export class Administrador {
    id: number;
    nome: string;
    email: string;
    senha: string;
    registro_ativo: boolean;
    login: Login;
    empresa: Empresa;
}