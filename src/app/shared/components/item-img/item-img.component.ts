import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-item-img',
    templateUrl: 'item-img.component.html',
    styleUrls: ['item-img.component.scss'],
})
export class ItemImgComponent {
    @Input()
    imgSrc: string;
}
