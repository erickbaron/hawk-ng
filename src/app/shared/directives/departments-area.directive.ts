import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { DepartmentsService } from '../services/departments.service';

@Directive({
    selector: '[appDepartmentsArea]'
})
export class DepartmentsAreaDirective implements OnInit, OnDestroy {
    get element(): HTMLElement {
        return this.el.nativeElement;
    }

    constructor(
        private el: ElementRef,
        private service: DepartmentsService
    ) { }

    ngOnInit(): void {
        this.service.setAreaElement(this.element);
    }

    ngOnDestroy(): void {
        this.service.setAreaElement(null);
    }
}
