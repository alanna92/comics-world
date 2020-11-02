import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: 'pagination.component.html',
    styleUrls: ['pagination.component.scss'],
})
export class PaginationComponent {
    page = 0;

    @Output()
    paginationChange = new EventEmitter<number>();

    back(): void {
        this.page -= 1;
        this.paginationChange.emit(this.page);
    }

    forward(): void {
        this.page += 1;
        this.paginationChange.emit(this.page);
    }
}
