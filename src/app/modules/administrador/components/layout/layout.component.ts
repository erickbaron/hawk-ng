import { Component } from "@angular/core";

@Component({
    selector: 'app-layout',
    templateUrl:'./layout.component.html',
    styleUrls: ['./layout.component.sass']
})
export class AdminLayoutComponent {
    links: {label: string; url: string} [] =[
        {label: 'Finanças', url: './financas'},
        {label: 'Cadastrar Produtos', url: './cadastrar-produtos'},
        {label: 'Editar Produtos', url: './editar-produtos'},
        {label: 'Estoque', url: './estoque'},
        {label: 'Lista de Produtos', url: './lista-produtos'}
    ]
}