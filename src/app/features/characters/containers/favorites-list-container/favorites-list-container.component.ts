import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoritesCharactersService } from '../../services/favorites-characters.service';
import { Character } from '../../models/character';

@Component({
    selector: 'app-favorites-list-container',
    templateUrl: 'favorites-list-container.component.html',
    styleUrls: ['favorites-list-container.component.scss'],
})
export class FavoritesListContainerComponent implements OnInit {
    characters$: Observable<Character[]>;

    constructor(
        private readonly favoritesService: FavoritesCharactersService
    ) {}

    ngOnInit(): void {
        this.characters$ = this.favoritesService.favorites$;
    }
}
