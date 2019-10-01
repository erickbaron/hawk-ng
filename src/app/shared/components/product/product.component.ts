import { Component, ElementRef, Inject, Input, OnInit, PLATFORM_ID, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CarouselComponent, SlidesOutputData } from 'ngx-owl-carousel-o';
import { FormControl } from '@angular/forms';
import { CartService } from '../../../../services/cart.service';
import { WishlistService } from '../../../../services/wishlist.service';
import { CompareService } from '../../../../services/compare.service';
import { isPlatformBrowser } from '@angular/common';
import { OwlCarouselOConfig } from 'ngx-owl-carousel-o/lib/carousel/owl-carousel-o-config';
import { PhotoSwipeService } from '../../../../services/photo-swipe.service';
import { DirectionService } from '../../../../services/direction.service';
import { Produto } from 'src/models/produto';
import { ProdutoService } from 'src/services/produto.service';
import { ActivatedRoute } from '@angular/router';

import { ItemCompra } from 'src/models/item-compra';
import { ItemCompraService } from 'src/services/item-compra.service';

class ProductImage {
    id: number;
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
    private dataProduct: Produto;
    private dataLayout: Layout = 'standard';

    produto: Produto = new Produto();

    id: number = 0;
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

    @Input() set product(value: Produto) {
        this.dataProduct = value;
        let imagem = new ProductImage();
        imagem.active = true;
        imagem.url = `https://localhost:44330/StaticFiles/${this.produto.nomeArquivo}`;
        imagem.id = this.produto.id;
        this.images = [imagem]
    }
    get product(): Produto {
        return this.dataProduct;
    }

    images: ProductImage[] = [];

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
    // addingToWishlist = false;
    // addingToCompare = false;

    constructor(
        private service: ProdutoService,
        private route: ActivatedRoute,
        @Inject(PLATFORM_ID) private platformId: any,
        private cart: CartService,
        private serviceItemCompra: ItemCompraService,
        // private wishlist: WishlistService,
        // private compare: CompareService,
        // private photoSwipe: PhotoSwipeService,
        private direction: DirectionService
    ) { }

    ngOnInit(): void {

        this.id = +this.route.snapshot.paramMap.get('id');
        this.service.obterPeloId(this.id).subscribe(x => {
            this.produto = x;
            let imagem = new ProductImage();
            imagem.active = true;
            imagem.url = `https://localhost:44330/StaticFiles/${this.produto.nomeArquivo}`;
            imagem.id = this.produto.id;
            this.images = [imagem]

            this.product = this.produto;

        });
    }

    setActiveImage(image: ProductImage): void {
        this.images.forEach(eachImage => eachImage.active = eachImage === image);
    }

    // featuredCarouselTranslated(event: SlidesOutputData): void {
    //     if (event.slides.length) {
    //         const activeImageId = event.slides[0].id;

    //         this.images.forEach(eachImage => eachImage.active = eachImage.id === activeImageId);

    //         if (!this.thumbnailsCarousel.slidesData.find(slide => slide.id === event.slides[0].id && slide.isActive)) {
    //             this.thumbnailsCarousel.to(event.slides[0].id);
    //         }
    //     }
    // }



    addToCart(): void {
        if (!this.addingToCart && this.product && this.quantity.value > 0) {
            this.addingToCart = true;

            // this.cart.add(this.product, this.quantity.value).subscribe({complete: () => this.addingToCart = false});
            let itemCompra = new ItemCompra();
            itemCompra.compraId = 0;
            itemCompra.produtoId = this.product.id;
            itemCompra.valorItem = this.product.valorVenda;
            this.serviceItemCompra.adicionar(itemCompra).subscribe(x => {
                alert("Cadastrou")
            })
        }
    }


    // addToWishlist(): void {
    //     if (!this.addingToWishlist && this.product) {
    //         this.addingToWishlist = true;

    //         this.wishlist.add(this.product).subscribe({complete: () => this.addingToWishlist = false});
    // }
    // }

    // addToCompare(): void {
    //     if (!this.addingToCompare && this.product) {
    //         this.addingToCompare = true;

    //         this.compare.add(this.product).subscribe({complete: () => this.addingToCompare = false});
    //     }
    // }

    // openPhotoSwipe(event: MouseEvent, image: ProductImage): void {
    //     if (this.layout !== 'quickview') {
    //         event.preventDefault();

    //         const images = this.images.map(eachImage => {
    //             return {
    //                 src: eachImage.url,
    //                 msrc: eachImage.url,
    //                 w: 700,
    //                 h: 700
    //             };
    //         });
    //         const options = {
    //             getThumbBoundsFn: index => {
    //                 const imageElement = this.imageElements.toArray()[index].nativeElement;
    //                 const pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
    //                 const rect = imageElement.getBoundingClientRect();

    //                 return {x: rect.left, y: rect.top + pageYScroll, w: rect.width};
    //             },
    //             index: this.images.indexOf(image),
    //             bgOpacity: .9,
    //             history: false
    //         };

    //         this.photoSwipe.open(images, options).subscribe(galleryRef => {
    //             galleryRef.listen('beforeChange', () => {
    //                 this.featuredCarousel.to(this.images[galleryRef.getCurrentIndex()].id);
    //             });
    //         });
    //     }
    // }

}


