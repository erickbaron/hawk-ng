import { Component, Input } from '@angular/core';
import { Post } from '../../../../shared/interfaces/post';
import { posts } from '../../../../../data/blog-posts';
import { latestComments } from '../../../../../data/blog-widget-latest-comments';
import { categories } from '../../../../../data/blog-widget-categories';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    @Input() position: 'start'|'end' = 'start';

    posts: Post[] = posts;
    categories = categories;
    latestComments = latestComments;

    constructor() { }
}
