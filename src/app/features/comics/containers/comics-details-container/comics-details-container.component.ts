import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ComicsService } from '../../services/comics.service';
import { Comic } from '../../models/comic';

@Component({
    selector: 'app-comics-details',
    templateUrl: 'comics-details-container.component.html',
    styleUrls: ['comics-details-container.component.scss'],
})
export class ComicsDetailsContainerComponent implements OnInit {
    comic$: Observable<Comic>;

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly comicsServive: ComicsService
    ) {}

    ngOnInit(): void {
        const { id } = this.activatedRoute.snapshot.params;
        this.comic$ = this.comicsServive.getComic(+id);
    }
}
