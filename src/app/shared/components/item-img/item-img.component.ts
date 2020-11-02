import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Thumbnail } from '../../models/thumbnail';

@Component({
    selector: 'app-item-img',
    templateUrl: 'item-img.component.html',
    styleUrls: ['item-img.component.scss'],
})
export class ItemImgComponent implements OnChanges {
    @Input()
    thumbnail: Thumbnail;

    imgSrc: string;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.thumbnail && this.thumbnail) {
            this.imgSrc = `${this.thumbnail.path}.${this.thumbnail.extension}`;
        }
    }
}
