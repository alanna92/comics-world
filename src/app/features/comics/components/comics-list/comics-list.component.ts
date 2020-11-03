import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
    selector: 'app-comics-list',
    templateUrl: 'comics-list.component.html',
    styleUrls: ['comics-list.component.scss'],
})
export class ComicsListComponent {
    @Input()
    comics: Comic[];

    @Output()
    itemClick = new EventEmitter<number>();

    handleItemClick(id: number): void {
        this.itemClick.emit(id);
    }
}
