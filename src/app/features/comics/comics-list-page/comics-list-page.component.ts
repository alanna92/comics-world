import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComicsService } from '../comics.service';
import { Comic } from '../comic';

@Component({
    selector: 'app-comics',
    templateUrl: 'comics-list-page.component.html',
    styleUrls: ['comics-list-page.component.scss'],
    providers: [ComicsService],
})
export class ComicsListPageComponent implements OnInit {
    comics$: Observable<Comic[]>;

    page = 0;

    constructor(private readonly comicsServive: ComicsService) {}

    ngOnInit(): void {
        this.comics$ = this.comicsServive.comics$;

        this.load(this.page);
    }

    load(offset: number): void {
        this.comicsServive.load(offset);
    }

    back(): void {
        this.page -= 1;
        this.load(this.page);
    }

    forward(): void {
        this.page += 1;
        this.load(this.page);
    }
}
