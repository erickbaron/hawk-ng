import { Component } from '@angular/core';
import { theme } from '../../../../../data/theme';

@Component({
    selector: 'app-footer-newsletter',
    templateUrl: './newsletter.component.html',
    styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent {
    theme = theme;

    constructor() { }
}
