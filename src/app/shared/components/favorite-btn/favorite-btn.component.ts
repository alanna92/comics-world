import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-favorite-btn',
    templateUrl: 'favorite-btn.component.html',
    styleUrls: ['favorite-btn.component.scss'],
})
export class FavoriteBtnComponent {
    @Input()
    isFavorite: boolean;

    @Output()
    toggleFavorite = new EventEmitter<void>();
}
