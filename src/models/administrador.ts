import {Login} from 'src/models/login'

export class Administrador {
    id: number;
    nome: string;
    email: string;
    senha: string;
    registro_ativo: boolean;
    login: Login;
    empresa: Empresa;
}