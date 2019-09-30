import { Component, ElementRef, Inject, Input, OnInit, PLATFORM_ID, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Product } from '../../interfaces/product';
import { CarouselComponent, SlidesOutputData } from 'ngx-owl-carousel-o';
import { FormControl } from '@angular/forms';
import { CartService } from '../../../../services/cart.service';
import { WishlistService } from '../../../../services/wishlist.service';
import { CompareService } from '../../../../services/compare.service';
import { isPlatformBrowser } from '@angular/common';
import { OwlCarouselOConfig } from 'ngx-owl-carousel-o/lib/carousel/owl-carousel-o-config';
import { PhotoSwipeService } from '../../../../services/photo-swipe.service';
import { DirectionService } from '../../../../services/direction.service';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from 'src/services/produto.service';
import { Produto } from 'src/models/produto';

interface ProductImage {
    id: string;
    url: string;
    active: boolean;
}

export type Layout = 'standard' | 'sidebar' | 'columnar' | 'quickview';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    private dataProduct: Product;
    private dataLayout: Layout = 'standard';

    showGallery = true;
    showGalleryTimeout: number;

    @ViewChild('featuredCarousel', { read: CarouselComponent, static: false }) featuredCarousel: CarouselComponent;
    @ViewChild('thumbnailsCarousel', { read: CarouselComponent, static: false }) thumbnailsCarousel: CarouselComponent;
    @ViewChildren('imageElement', { read: ElementRef }) imageElements: QueryList<ElementRef>;

    @Input() set layout(value: Layout) {
        this.dataLayout = value;

        if (isPlatformBrowser(this.platformId)) {
            // this dirty hack is needed to re-initialize the gallery after changing the layout
            clearTimeout(this.showGalleryTimeout);
            this.showGallery = false;
            this.showGalleryTimeout = window.setTimeout(() => {
                this.showGallery = true;
            }, 0);
        }
    }
    get layout(): Layout {
        return this.dataLayout;
    }

    @Input() set product(value: Product) {
        this.dataProduct = value;
        this.images = value ? this.dataProduct.images.map((url, index) => {
            return {
                id: index.toString(),
                url,
                active: index === 0
            };
        }) : [];
    }
    get product(): Product {
        return this.dataProduct;
    }


    carouselOptions: Partial<OwlCarouselOConfig> = {
        dots: false,
        autoplay: false,
        responsive: {
            0: { items: 1 }
        },
        rtl: this.direction.isRTL()
    };

    thumbnailsCarouselOptions: Partial<OwlCarouselOConfig> = {
        dots: false,
        autoplay: false,
        margin: 10,
        items: 5,
        responsive: {
            480: { items: 5 },
            380: { items: 4 },
            0: { items: 3 }
        },
        rtl: this.direction.isRTL()
    };

    quantity: FormControl = new FormControl(1);

    addingToCart = false;
    addingToWishlist = false;
    addingToCompare = false;

    constructor(
        @Inject(PLATFORM_ID) private platformId: any,
        private cart: CartService,
        private wishlist: WishlistService,
        private compare: CompareService,
        private photoSwipe: PhotoSwipeService,
        private direction: DirectionService,
        private service: ProdutoService,
        private route: ActivatedRoute

    ) { }


    produto: Produto = new Produto();
    id: number = 0;

    ngOnInit(): void {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.service.obterPeloId(this.id).subscribe(x => {
            this.produto = x;
        });
        if (this.layout !== 'quickview' && isPlatformBrowser(this.platformId)) {
            this.photoSwipe.load().subscribe();
        }
    }


    featuredCarouselTranslated(event: SlidesOutputData): void {
        if (event.slides.length) {
            const activeImageId = event.slides[0].id;

            this.images.forEach(eachImage => eachImage.active = eachImage.id === activeImageId);

            if (!this.thumbnailsCarousel.slidesData.find(slide => slide.id === event.slides[0].id && slide.isActive)) {
                this.thumbnailsCarousel.to(event.slides[0].id);
            }
        }
    }

    images: ProductImage[] = [];
    // addToCart(): void {
    //     if (!this.addingToCart && this.product && this.quantity.value > 0) {
    //         this.addingToCart = true;

    //         this.cart.add(this.product, this.quantity.value).subscribe({ complete: () => this.addingToCart = false });
    //     }
    // }



   
}
