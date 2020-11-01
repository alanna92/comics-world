import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
    selector: 'app-comic-img',
    templateUrl: 'comic-img.component.html',
    styleUrls: ['comic-img.component.scss'],
})
export class ComicImgComponent implements OnChanges {
    @Input()
    comic: Comic;

    imgSrc: string;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.comic && this.comic) {
            this.imgSrc = `${this.comic.thumbnail.path}.${this.comic.thumbnail.extension}`;
        }
    }
}
