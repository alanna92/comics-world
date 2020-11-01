import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComicsService } from '../../services/comics.service';
import { Comic } from '../../models/comic';

@Component({
    selector: 'app-comics',
    templateUrl: 'comics-list-container.component.html',
    styleUrls: ['comics-list-container.component.scss'],
    providers: [ComicsService],
})
export class ComicsListContainerComponent implements OnInit {
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
