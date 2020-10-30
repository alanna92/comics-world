import { Component, Input } from '@angular/core';
import { Comic } from '../../comic';

@Component({
    selector: 'app-comics-container',
    templateUrl: 'comics-container.component.html',
    styleUrls: ['comics-container.component.scss'],
})
export class ComicsContainerComponent {
    @Input()
    comics: Comic[];
}
