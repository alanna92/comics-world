import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: 'pagination.component.html',
    styleUrls: ['pagination.component.scss'],
})
export class PaginationComponent {
    @Input()
    page = 0;

    @Input()
    totalPages = 0;

    @Output()
    paginationChange = new EventEmitter<number>();
}
