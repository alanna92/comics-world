import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

    constructor(private readonly comicsServive: ComicsService) {}

    ngOnInit(): void {
        this.comics$ = this.comicsServive.comics$;
        this.isUpdating$ = this.comicsServive.getIsUpdating();

        this.load(0);
    }

    load(offset: number): void {
        this.comicsServive.load(offset);
    }

    filter(searchText: string): void {
        this.comicsServive.load(0, searchText);
    }
}
