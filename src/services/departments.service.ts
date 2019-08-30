import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DepartmentsService {
    private areaElementSubject$: BehaviorSubject<HTMLElement> = new BehaviorSubject(null);

    areaElement$: Observable<HTMLElement> = this.areaElementSubject$.asObservable();

    constructor() { }

    setAreaElement(value: HTMLElement): void {
        this.areaElementSubject$.next(value);
    }
}
