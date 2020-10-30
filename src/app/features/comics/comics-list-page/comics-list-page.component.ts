import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../comics.service';
import { Comic } from '../comic';

@Component({
    selector: 'app-comics',
    templateUrl: 'comics-list-page.component.html',
    styleUrls: ['comics-list-page.component.scss'],
    providers: [ComicsService],
})
export class ComicsListPageComponent implements OnInit {
    comics: Comic[];

    constructor(private readonly comicsServive: ComicsService) {}

    ngOnInit(): void {
        this.comicsServive.list().subscribe((response) => {
            this.comics = response;
        });
    }
}
