import { Component, Input } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
    selector: 'app-comics-list',
    templateUrl: 'comics-list.component.html',
    styleUrls: ['comics-list.component.scss'],
})
export class ComicsListComponent {
    @Input()
    comics: Comic[];
}
