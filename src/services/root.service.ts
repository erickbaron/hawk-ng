import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RootService {
    path = '';

    constructor() { }

    product(id: number): any[] | string {
        return `${this.path}/shop/product/${id}`;
    }

    post(): string {
        return `${this.path}/blog/post-classic`;
    }

    url(url: string): string {
        return this.path + url;
    }
}
