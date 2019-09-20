import { Component } from '@angular/core';
import { NavigationLink } from '../../../../shared/interfaces/navigation-link';
import { DirectionService } from '../../../../../services/direction.service';
import { CategoriaService } from 'src/services/categoria.service';

@Component({
    selector: 'app-header-links',
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.scss']
})
export class LinksComponent {
    items: NavigationLink[] = [];

    constructor(
        private direction: DirectionService,
        private categoriaService: CategoriaService
    ) { }

    ngOnInit() {
        this.obterCategorias();
    }

    obterCategorias() {
        this.items = [{
            label: 'Categoria', url: './shop', menu: {
                type: 'megamenu',
                size: 'sm',
                columns: [
                    {
                        size: 10, items: []
                    }
                ]
            }
        }]
        this.categoriaService.obtertodos().subscribe(categorias => {
            let categoriasNavBar = this.items[0].menu["columns"][0]["items"];
            for(let i = 0; i < categorias.length; i++){
                let categoria = categorias[i];
                categoriasNavBar.push({
                    label: categoria.nome,
                    url: ''
                });
            }
        });
        
    }

    mouseenter(event: MouseEvent): void {
        if (!(event.target instanceof HTMLElement)) {
            return;
        }

        const element: HTMLElement = event.target;
        const megamenu = element.querySelector('.nav-links__megamenu') as HTMLElement;

        if (!megamenu) {
            return;
        }

        const container = megamenu.offsetParent;
        const containerWidth = container.getBoundingClientRect().width;
        const megamenuWidth = megamenu.getBoundingClientRect().width;

        if (this.direction.isRTL()) {
            const itemPosition = containerWidth - (element.offsetLeft + element.offsetWidth);
            const megamenuPosition = Math.round(Math.min(itemPosition, containerWidth - megamenuWidth));

            megamenu.style.right = megamenuPosition + 'px';
        } else {
            const itemPosition = element.offsetLeft;
            const megamenuPosition = Math.round(Math.min(itemPosition, containerWidth - megamenuWidth));

            megamenu.style.left = megamenuPosition + 'px';
        }
    }
}
