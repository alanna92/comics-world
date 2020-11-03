import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Character } from '../../models/character';
import { CharactersService } from '../../services/characters.service';

@Component({
    selector: 'app-characters',
    templateUrl: 'characters-list-container.component.html',
    styleUrls: ['characters-list-container.component.scss'],
})
export class CharactersListContainerComponent implements OnInit {
    characters$: Observable<Character[]>;

    isUpdating$: Observable<boolean>;

    page = 0;

    totalPages$: Observable<number>;

    searchText = '';

    constructor(
        private readonly charactersServive: CharactersService,
        private readonly router: Router
    ) {}

    ngOnInit(): void {
        this.characters$ = this.charactersServive.characters$;
        this.isUpdating$ = this.charactersServive.getIsUpdating();
        this.totalPages$ = this.charactersServive.totalPages$;

        this.load();
    }

    load(): void {
        this.charactersServive.load(this.page, this.searchText);
    }

    filter(searchText: string): void {
        this.page = 0;
        this.searchText = searchText;
        this.load();
    }

    handleItemClick(id: number): void {
        this.router.navigate(['characters', id]);
    }

    handlePaginationChange(diff: number): void {
        this.page += diff;
        this.load();
    }
}
