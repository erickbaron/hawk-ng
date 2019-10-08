import { Component, OnInit } from '@angular/core';
import { posts } from '../../../data/blog-posts';
import { brands } from '../../../data/shop-brands';

import { categories } from '../../../data/shop-block-categories';
import { Produto } from 'src/models/produto';
import { ProdutoService } from 'src/services/produto.service';
import { Categoria } from 'src/models/categoria';

@Component({
    selector: 'app-home',
    templateUrl: './page-home-one.component.html',
    styleUrls: ['./page-home-one.component.scss']
})
export class PageHomeOneComponent implements OnInit {

    products :Produto[] = [];
    categories: Categoria = new Categoria;
    posts = posts;
    brands = brands;

    columns = [
        {
            header: 'Produtos Mais Procurados',
            products: this.products.slice(0, 3)
        },
        {
            header: 'Ofertas Especiais',
            products: this.products.slice(3, 6)
        },
        {
            header: 'Mais vendidos',
            products: this.products.slice(6, 9)
        }
    ];

    featuredProducts = {
        loading: false,
        products: this.products.slice(),
        groups: [
            // {name: 'All', current: true},
            // {name: 'Power Tools', current: false},
            // {name: 'Hand Tools', current: false},
            // {name: 'Plumbing', current: false}
        ],

        timeout: null, // only for demo

        groupChange: group => {
            // only for demo
            this.featuredProducts.loading = true;

            clearTimeout(this.featuredProducts.timeout);

            this.featuredProducts.timeout = setTimeout(() => {
                const itemsArray = this.featuredProducts.products;
                const newItemsArray = [];
                while (itemsArray.length > 0) {
                    const randomIndex = Math.floor(Math.random() * itemsArray.length);
                    const randomItem = itemsArray.splice(randomIndex, 1)[0];
                    newItemsArray.push(randomItem);
                }
                this.featuredProducts.products = newItemsArray;
                this.featuredProducts.loading = false;
            }, 1000);
        }
    };

    newArrivals = {
        loading: false,
        products: this.products.slice(),
        groups: [
            {name: 'Todos', current: true},
            {name: 'Celulares', current: false},
            {name: 'Notebooks', current: false},
            {name: 'Tablet', current: false}
        ],

        timeout: null, // only for demo

        groupChange: group => {
            // only for demo
            this.newArrivals.loading = true;

            clearTimeout(this.newArrivals.timeout);

            this.newArrivals.timeout = setTimeout(() => {
                const itemsArray = this.newArrivals.products;
                const newItemsArray = [];
                while (itemsArray.length > 0) {
                    const randomIndex = Math.floor(Math.random() * itemsArray.length);
                    const randomItem = itemsArray.splice(randomIndex, 1)[0];
                    newItemsArray.push(randomItem);
                }
                this.newArrivals.products = newItemsArray;
                this.newArrivals.loading = false;
            }, 1000);
        }
    };

    ngOnInit(): void {
        this.produtoService.obterTodos().subscribe(x => {
            this.products = x;
            this.newArrivals.products = this.products.slice();
            this.featuredProducts.products = this.products.slice();
        });
    }

    constructor(private produtoService: ProdutoService) { }
}
