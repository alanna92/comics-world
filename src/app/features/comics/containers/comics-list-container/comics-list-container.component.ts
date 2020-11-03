import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ComicsService } from '../../services/comics.service';
import { Comic } from '../../models/comic';

@Component({
    selector: 'app-comics',
    templateUrl: 'comics-list-container.component.html',
    styleUrls: ['comics-list-container.component.scss'],
})
export class ComicsListContainerComponent implements OnInit {
    comics$: Observable<Comic[]>;

    isUpdating$: Observable<boolean>;

    page = 0;

    totalPages$: Observable<number>;

    searchText = '';

    constructor(
        private readonly router: Router,
        private readonly comicsServive: ComicsService
    ) {}

    ngOnInit(): void {
        this.comics$ = this.comicsServive.comics$;
        this.isUpdating$ = this.comicsServive.getIsUpdating();
        this.totalPages$ = this.comicsServive.totalPages$;

        this.load();
    }

    load(): void {
        this.comicsServive.load(this.page, this.searchText);
    }

    filter(searchText: string): void {
        this.page = 0;
        this.searchText = searchText;
        this.load();
    }

    handleItemClick(id: number): void {
        this.router.navigate(['comics', id]);
    }

    handlePaginationChange(diff: number): void {
        this.page += diff;
        this.load();
    }
}
