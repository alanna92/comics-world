import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MarvelItem } from '../../models/marvel-item';

@Component({
    selector: 'app-list-item',
    templateUrl: 'list-item.component.html',
    styleUrls: ['list-item.component.scss'],
})
export class ListItemComponent {
    @Input()
    marvelItem: MarvelItem;

    constructor(
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute
    ) {}

    handleItemClick(): void {
        this.router.navigate([this.marvelItem.id], {
            relativeTo: this.activatedRoute,
        });
    }
}
