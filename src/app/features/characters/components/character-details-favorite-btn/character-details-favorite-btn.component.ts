import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Character } from '../../models/character';
import { FavoritesCharactersService } from '../../services/favorites-characters.service';

@Component({
    selector: 'app-character-details-favorite-btn',
    templateUrl: 'character-details-favorite-btn.component.html',
    styleUrls: ['character-details-favorite-btn.component.scss'],
})
export class CharacterDetailsFavoriteBtnComponent implements OnChanges {
    @Input()
    character: Character;

    fromFavoriteList: Character;

    constructor(
        private readonly favoritesService: FavoritesCharactersService
    ) {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.character && this.character) {
            this.fromFavoriteList = this.favoritesService.find(this.character);
        }
    }

    toggle(): void {
        if (this.fromFavoriteList) {
            this.favoritesService.remove(this.character);
            this.fromFavoriteList = null;
        } else {
            this.favoritesService.add(this.character);
            this.fromFavoriteList = this.character;
        }
    }
}
