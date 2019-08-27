import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RootService } from '../../shared/services/root.service';

@Component({
    selector: 'app-main',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.scss']
})
export class RootComponent {
    headerLayout: string;

    constructor(
        public root: RootService,
        public router: Router,
        public route: ActivatedRoute
    ) {
        this.route.data.subscribe(data => this.headerLayout = data.headerLayout);
        this.root.path = this.router.createUrlTree(['./'], {relativeTo: route}).toString();
    }
}
