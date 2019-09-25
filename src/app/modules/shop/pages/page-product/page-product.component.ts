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
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    returnUrl: string;

    produto: Produto = new Produto;

    id: number

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



   /* {
        id: 1,
        name: 'Notebook Positivo Stilo XC7660, Intel Core i3, 4GB, 1TB, Tela 14" HD e Windows 10',
        price: 2100,
        compareAtPrice: null,
        images: ['assets/images/products/product-1.jpg', 'assets/images/products/product-1-1.jpg'],
        badges: ['new'],
        rating: 4,
        reviews: 12,
        availability: 'in-stock',
        features: [
            {name: 'Speed', value: '750 RPM'},
            {name: 'Power Source', value: 'Cordless-Electric'},
            {name: 'Battery Cell Type', value: 'Lithium'},
            {name: 'Voltage', value: '20 Volts'},
            {name: 'Battery Capacity', value: '2 Ah'}
        ],
        options: []
    },
    {
        id: 2,
        name: 'iPhone 8 Apple 64GB Cinza Espacial 4G Tela 4,7” - Retina Câm. 12MP + Selfie 7MP ',
        price: 4000,
        compareAtPrice: null,
        images: ['assets/images/products/product-2.jpg', 'assets/images/products/product-2-1.jpg'],
        badges: ['hot'],
        rating: 5,
        reviews: 3,
        availability: 'in-stock',
        features: [
            {name: 'Speed', value: '750 RPM'},
            {name: 'Power Source', value: 'Cordless-Electric'},
            {name: 'Battery Cell Type', value: 'Lithium'},
            {name: 'Voltage', value: '20 Volts'},
            {name: 'Battery Capacity', value: '2 Ah'}
        ],
        options: []
    },
    {
        id: 3,
        name: 'Drill Screwdriver Brandix ALX7054 200 Watts',
        price: 850,
        compareAtPrice: null,
        images: ['assets/images/products/product-3.jpg', 'assets/images/products/product-3-1.jpg'],
        badges: [],
        rating: 4,
        reviews: 8,
        availability: 'in-stock',
        features: [
            {name: 'Speed', value: '750 RPM'},
            {name: 'Power Source', value: 'Cordless-Electric'},
            {name: 'Battery Cell Type', value: 'Lithium'},
            {name: 'Voltage', value: '20 Volts'},
            {name: 'Battery Capacity', value: '2 Ah'}
        ],
        options: []
    },
    {
        id: 4,
        name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
        price: 949,
        compareAtPrice: 1189,
        images: ['assets/images/products/product-4.jpg', 'assets/images/products/product-4-1.jpg'],
        badges: ['sale'],
        rating: 3,
        reviews: 15,
        availability: 'in-stock',
        features: [
            {name: 'Speed', value: '750 RPM'},
            {name: 'Power Source', value: 'Cordless-Electric'},
            {name: 'Battery Cell Type', value: 'Lithium'},
            {name: 'Voltage', value: '20 Volts'},
            {name: 'Battery Capacity', value: '2 Ah'}
        ],
        options: []
    },
    {
        id: 5,
        name: 'Brandix Router Power Tool 2017ERXPK',
        price: 1700,
        compareAtPrice: null,
        images: ['assets/images/products/product-5.jpg', 'assets/images/products/product-5-1.jpg'],
        badges: [],
        rating: 4,
        reviews: 2,
        availability: 'in-stock',
        features: [
            {name: 'Speed', value: '750 RPM'},
            {name: 'Power Source', value: 'Cordless-Electric'},
            {name: 'Battery Cell Type', value: 'Lithium'},
            {name: 'Voltage', value: '20 Volts'},
            {name: 'Battery Capacity', value: '2 Ah'}
        ],
        options: []
    },
    {
        id: 6,
        name: 'Brandix Drilling Machine DM2019KW4 4kW',
        price: 3199,
        compareAtPrice: null,
        images: ['assets/images/products/product-6.jpg', 'assets/images/products/product-6-1.jpg'],
        badges: [],
        rating: 3,
        reviews: 21,
        availability: 'in-stock',
        features: [
            {name: 'Speed', value: '750 RPM'},
            {name: 'Power Source', value: 'Cordless-Electric'},
            {name: 'Battery Cell Type', value: 'Lithium'},
            {name: 'Voltage', value: '20 Volts'},
            {name: 'Battery Capacity', value: '2 Ah'}
        ],
        options: []
    },
    {
        id: 7,
        name: 'Brandix Pliers',
        price: 24,
        compareAtPrice: null,
        images: ['assets/images/products/product-7.jpg', 'assets/images/products/product-7-1.jpg'],
        badges: [],
        rating: 2,
        reviews: 1,
        availability: 'in-stock',
        features: [
            {name: 'Speed', value: '750 RPM'},
            {name: 'Power Source', value: 'Cordless-Electric'},
            {name: 'Battery Cell Type', value: 'Lithium'},
            {name: 'Voltage', value: '20 Volts'},
            {name: 'Battery Capacity', value: '2 Ah'}
        ],
        options: []
    },
    {
        id: 8,
        name: 'Water Hose 40cm',
        price: 15,
        compareAtPrice: null,
        images: ['assets/images/products/product-8.jpg', 'assets/images/products/product-8-1.jpg'],
        badges: [],
        rating: 2,
        reviews: 5,
        availability: 'in-stock',
        features: [
            {name: 'Speed', value: '750 RPM'},
            {name: 'Power Source', value: 'Cordless-Electric'},
            {name: 'Battery Cell Type', value: 'Lithium'},
            {name: 'Voltage', value: '20 Volts'},
            {name: 'Battery Capacity', value: '2 Ah'}
        ],
        options: []
    },
    {
        id: 9,
        name: 'Spanner Wrench',
        price: 19,
        compareAtPrice: null,
        images: ['assets/images/products/product-9.jpg', 'assets/images/products/product-9-1.jpg'],
        badges: [],
        rating: 4,
        reviews: 34,
        availability: 'in-stock',
        features: [
            {name: 'Speed', value: '750 RPM'},
            {name: 'Power Source', value: 'Cordless-Electric'},
            {name: 'Battery Cell Type', value: 'Lithium'},
            {name: 'Voltage', value: '20 Volts'},
            {name: 'Battery Capacity', value: '2 Ah'}
        ],
        options: []
    },
    {
        id: 10,
        name: 'Water Tap',
        price: 15,
        compareAtPrice: null,
        images: ['assets/images/products/product-10.jpg', 'assets/images/products/product-10-1.jpg'],
        badges: [],
        rating: 5,
        reviews: 3,
        availability: 'in-stock',
        features: [
            {name: 'Speed', value: '750 RPM'},
            {name: 'Power Source', value: 'Cordless-Electric'},
            {name: 'Battery Cell Type', value: 'Lithium'},
            {name: 'Voltage', value: '20 Volts'},
            {name: 'Battery Capacity', value: '2 Ah'}
        ],
        options: []
    },
    {
        id: 11,
        name: 'Hand Tool Kit',
        price: 149,
        compareAtPrice: null,
        images: ['assets/images/products/product-11.jpg', 'assets/images/products/product-11-1.jpg'],
        badges: [],
        rating: 4,
        reviews: 7,
        availability: 'in-stock',
        features: [
            {name: 'Speed', value: '750 RPM'},
            {name: 'Power Source', value: 'Cordless-Electric'},
            {name: 'Battery Cell Type', value: 'Lithium'},
            {name: 'Voltage', value: '20 Volts'},
            {name: 'Battery Capacity', value: '2 Ah'}
        ],
        options: []
    },
    {
        id: 12,
        name: 'Ash\'s Chainsaw 3.5kW',
        price: 666.99,
        compareAtPrice: null,
        images: ['assets/images/products/product-12.jpg', 'assets/images/products/product-12-1.jpg'],
        badges: [],
        rating: 5,
        reviews: 17,
        availability: 'in-stock',
        features: [
            {name: 'Speed', value: '750 RPM'},
            {name: 'Power Source', value: 'Cordless-Electric'},
            {name: 'Battery Cell Type', value: 'Lithium'},
            {name: 'Voltage', value: '20 Volts'},
            {name: 'Battery Capacity', value: '2 Ah'}
        ],
        options: []
    },
    {
        id: 13,
        name: 'Brandix Angle Grinder KZX3890PQW',
        price: 649,
        compareAtPrice: null,
        images: ['assets/images/products/product-13.jpg', 'assets/images/products/product-13-1.jpg'],
        badges: [],
        rating: 2,
        reviews: 8,
        availability: 'in-stock',
        features: [
            {name: 'Speed', value: '750 RPM'},
            {name: 'Power Source', value: 'Cordless-Electric'},
            {name: 'Battery Cell Type', value: 'Lithium'},
            {name: 'Voltage', value: '20 Volts'},
            {name: 'Battery Capacity', value: '2 Ah'}
        ],
        options: []
    },
    {
        id: 14,
        name: 'Brandix Air Compressor DELTAKX500',
        price: 1800,
        compareAtPrice: null,
        images: ['assets/images/products/product-14.jpg', 'assets/images/products/product-14-1.jpg'],
        badges: [],
        rating: 3,
        reviews: 14,
        availability: 'in-stock',
        features: [
            {name: 'Velocidade', value: '750 RPM'},
            {name: 'Power Source', value: 'Cordless-Electric'},
            {name: 'Battery Cell Type', value: 'Lithium'},
            {name: 'Voltage', value: '20 Volts'},
            {name: 'Battery Capacity', value: '2 Ah'}
        ],
        options: []
    },
    {
        id: 15,
        name: '',
        price: 290,
        compareAtPrice: null,
        images: ['assets/images/products/product-15.jpg', 'assets/images/products/product-15-1.jpg'],
        badges: [],
        rating: 2,
        reviews: 1,
        availability: 'in-stock',
        features: [
            {name: 'Speed', value: '750 RPM'},
            {name: 'Power Source', value: 'Cordless-Electric'},
            {name: 'Battery Cell Type', value: 'Lithium'},
            {name: 'Voltage', value: '20 Volts'},
            {name: 'Battery Capacity', value: '2 Ah'}
        ],
        options: []
    },
    {
        id: 16,
        name: 'Brandix Screwdriver SCREW1500ACC',
        price: 1499,
        compareAtPrice: null,
        images: [
            'assets/images/products/product-16.jpg',
            'assets/images/products/product-16-1.jpg',
            'assets/images/products/product-16-2.jpg',
            'assets/images/products/product-16-3.jpg',
            'assets/images/products/product-16-4.jpg'
        ],
        badges: [],
        rating: 5,
        reviews: 3,
        availability: 'in-stock',
        features: [
            {name: 'Speed', value: '750 RPM'},
            {name: 'Power Source', value: 'Cordless-Electric'},
            {name: 'Battery Cell Type', value: 'Lithium'},
            {name: 'Voltage', value: '20 Volts'},
            {name: 'Battery Capacity', value: '2 Ah'}
        ],
        options: []
    }
];*/


/*import { Component } from '@angular/core';
import { products } from '../../../../../data/shop-products';
import { Product } from '../../../../shared/interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { categories } from '../../../../../data/shop-widget-categories';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-page-product',
    templateUrl: './page-product.component.html',
    styleUrls: ['./page-product.component.scss']
})
export class PageProductComponent {
    categories = categories;
    products: Product[] = products;
    product: Product;
    layout: 'standard'|'columnar'|'sidebar' = 'standard';
    sidebarPosition: 'start'|'end' = 'start'; // For LTR scripts "start" is "left" and "end" is "right"

    constructor(private route: ActivatedRoute) {
        this.route.data.subscribe(data => {
            this.layout = 'layout' in data ? data.layout : this.layout;
            this.sidebarPosition = 'sidebarPosition' in data ? data.sidebarPosition : this.sidebarPosition;
        });
        this.route.params.pipe(map(params => {
            if (params.hasOwnProperty('id')) {
                const product = products.find(eachProduct => eachProduct.id === parseFloat(params.id));

                if (product) {
                    return product;
                }
            }

            return products[products.length - 1];
        })).subscribe(product => this.product = product);
    }
}
*/