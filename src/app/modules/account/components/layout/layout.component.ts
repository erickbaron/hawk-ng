import { Component } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.sass']
})
export class LayoutComponent {
    links: {label: string; url: string}[] = [
        {label: 'Editar Perfil', url: './profile'},
        {label: 'Histórico de Pedidos', url: './orders'},
        {label: 'Endereço', url: './addresses'},
        {label: 'Senha', url: './password'},
        {label: 'Logout', url: './login'}
    ];

    constructor() { }
}
