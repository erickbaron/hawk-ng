import { Component } from '@angular/core';
import { navigation } from '../../../../../data/header-navigation';
import { NavigationLink } from '../../../../shared/interfaces/navigation-link';
import { DirectionService } from '../../../../shared/services/direction.service';

@Component({
    selector: 'app-header-links',
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.scss']
})
export class LinksComponent {
    items: NavigationLink[] = navigation;

    constructor(
        private direction: DirectionService
    ) {}

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
