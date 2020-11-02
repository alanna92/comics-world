import { Component, Input } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
    selector: 'app-comic-details',
    templateUrl: 'comic-details.component.html',
    styleUrls: ['comic-details.component.scss'],
})
export class ComicDetailsComponent {
    @Input()
    comic: Comic;
}
