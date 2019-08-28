import {Cartao} from "src/models/cartao";
import {Cliente} from "src/models/cliente";
import {Administrador} from "src/models/administrador";

export class Compra {
    id: number;
    valor_total: number;
    valor_desconto: number;
    registro_ativo: boolean;
    cliente: Cliente;
    administrador: Administrador;
    cartao: Cartao;
}