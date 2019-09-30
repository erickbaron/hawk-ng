import { Component, Input, OnInit } from '@angular/core';
import { ProductFeaturesSection, ProductReview } from '../../../../shared/interfaces/product';
import { specification } from '../../../../../data/shop-product-spec';
import { reviews } from '../../../../../data/shop-product-reviews';
import { Empresa } from 'src/models/empresa';
import { ProdutoService } from 'src/services/produto.service';
import { Produto } from 'src/models/produto';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product-tabs',
    templateUrl: './product-tabs.component.html',
    styleUrls: ['./product-tabs.component.scss']
})
export class ProductTabsComponent implements OnInit {
    ngOnInit(): void {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.service.obterPeloId(this.id).subscribe(x => {
            this.produto = x;
        });
    }
    @Input() withSidebar = false;
    @Input() tab: 'description' | 'specification' | 'reviews' = 'description';

    produto: Produto = new Produto();
    id: number = 0;

    specification: ProductFeaturesSection[] = specification;
    reviews: ProductReview[] = reviews;

    constructor(
        private service: ProdutoService,
        private route: ActivatedRoute
    ) { }

}
