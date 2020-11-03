import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Character } from '../../models/character';
import { FavoritesCharactersService } from '../../services/favorites-characters.service';

@Component({
    selector: 'app-favorite',
    templateUrl: 'favorite-list-container.component.html',
    styleUrls: ['favorite-list-container.component.scss'],
})
export class FavoriteListContainerComponent implements OnInit {
    favorite$: Observable<Character[]>;

    constructor(
        private readonly router: Router,
        private readonly favoritesService: FavoritesCharactersService
    ) {}

    ngOnInit(): void {
        this.favorite$ = this.favoritesService.getFavorites();
    }

    handleItemClick(id: number): void {
        this.router.navigate(['characters', id]);
    }
}
