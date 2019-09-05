import { Component } from '@angular/core';
import { products } from '../../../data/shop-products';
import { categories } from '../../../data/shop-block-categories';
import { posts } from '../../../data/blog-posts';
import { brands } from '../../../data/shop-brands';

@Component({
    selector: 'app-page-home-two',
    templateUrl: './page-home-two.component.html',
    styleUrls: ['./page-home-two.component.scss']
})
export class PageHomeTwoComponent {
    products = products;
    categories = categories;
    posts = posts;
    brands = brands;

    columns = [
        {
            header: 'Top Rated Products',
            products: products.slice(0, 3)
        },
        {
            header: 'Special Offers',
            products: products.slice(3, 6)
        },
        {
            header: 'Bestsellers',
            products: products.slice(6, 9)
        }
    ];

    featuredProducts = {
        loading: false,
        products: products.slice(),
        groups: [
            {name: 'All', current: true},
            {name: 'Power Tools', current: false},
            {name: 'Hand Tools', current: false},
            {name: 'Plumbing', current: false}
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
        products: products.slice(),
        groups: [
            {name: 'All', current: true},
            {name: 'Power Tools', current: false},
            {name: 'Hand Tools', current: false},
            {name: 'Plumbing', current: false}
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

    constructor() { }
}
