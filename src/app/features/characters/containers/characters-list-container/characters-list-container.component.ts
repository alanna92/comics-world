import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../../models/character';
import { CharactersService } from '../../services/characters.service';
import { FavoritesCharactersService } from '../../services/favorites-characters.service';

@Component({
    selector: 'app-characters',
    templateUrl: 'characters-list-container.component.html',
    styleUrls: ['characters-list-container.component.scss'],
})
export class CharactersListContainerComponent implements OnInit {
    characters$: Observable<Character[]>;

    isUpdating$: Observable<boolean>;

    filterByFavorites = false;

    constructor(
        private readonly charactersServive: CharactersService,
        private readonly favoritesService: FavoritesCharactersService
    ) {}

    ngOnInit(): void {
        this.characters$ = this.charactersServive.characters$;
        this.isUpdating$ = this.charactersServive.getIsUpdating();

        this.load(0);
    }

    load(offset: number): void {
        this.charactersServive.load(offset);
    }

    filter(searchText: string): void {
        this.charactersServive.load(0, searchText);
    }

    changeFavoriteFilter(): void {
        this.filterByFavorites = !this.filterByFavorites;

        this.characters$ = this.filterByFavorites
            ? this.favoritesService.getFavorites()
            : this.charactersServive.characters$;
    }
}
