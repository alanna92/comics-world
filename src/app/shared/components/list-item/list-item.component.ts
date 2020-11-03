import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-list-item',
    templateUrl: 'list-item.component.html',
    styleUrls: ['list-item.component.scss'],
})
export class ListItemComponent {
    @Input()
    imgSrc: string;

    @Input()
    title: string;

    @Output()
    itemClick = new EventEmitter<number>();

    constructor(
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute
    ) {}

    handleItemClick(): void {
        this.itemClick.emit();
    }
}
