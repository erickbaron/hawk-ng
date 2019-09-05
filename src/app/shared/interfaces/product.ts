export interface ProductFeature {
    name: string;
    value: string;
}

export interface ProductFeaturesSection {
    name: string;
    features: ProductFeature[];
}

export interface ProductReview {
    avatar: string;
    author: string;
    rating: number;
    date: string;
    text: string;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    compareAtPrice: number|null;
    images: string[];
    badges: ('sale'|'new'|'hot')[];
    rating: number;
    reviews: number;
    availability: string;
    features: ProductFeature[];
    options: Array<any>;
}
