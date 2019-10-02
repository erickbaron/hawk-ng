import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/models/produto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/services/produto.service';

@Component({
    selector: 'app-page-product',
    templateUrl: './page-product.component.html',
    styles: []
})
export class ProdutoComponent implements OnInit {

    returnUrl: string;

    produto: Produto = new Produto();
    id: number = 0;

    ngOnInit(): void {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.service.obterPeloId(this.id).subscribe(x => {
            this.produto = x;
        });
    }

    constructor(
        private service: ProdutoService,
        private route: ActivatedRoute,
        private router: Router) { }

    produtos: Produto[] = [];

    obterPeloId(id) {
        this.service.obterPeloId(id).subscribe(x => {
            this.produto = x;
        })
    }
}



