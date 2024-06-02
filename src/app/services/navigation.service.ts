// shared/navigation.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    private sectionToNavigate = new BehaviorSubject<string>('');

    constructor() { }

    navigateToSection(sectionId: string) {
        this.sectionToNavigate.next(sectionId);
    }

    getSectionToNavigate() {
        return this.sectionToNavigate.asObservable();
    }
}
