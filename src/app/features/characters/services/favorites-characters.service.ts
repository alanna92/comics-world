import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Character } from '../models/character';

@Injectable({ providedIn: 'root' })
export class FavoritesCharactersService {
    private FAVORITE_KEY = 'favorites';

    private favorites: BehaviorSubject<Character[]>;

    favorites$: Observable<Character[]>;

    constructor() {
        const favorites = (
            JSON.parse(localStorage.getItem(this.FAVORITE_KEY)) || []
        ).map((item) => new Character(item));

        this.favorites = new BehaviorSubject<Character[]>(favorites);
        this.favorites$ = this.favorites.asObservable();
    }

    getFavorites(): Observable<Character[]> {
        return this.favorites$;
    }

    add(character: Character): void {
        const favorites = this.favorites.getValue();

        character.isFavorite = true;
        character.favoriteAt = new Date();

        favorites.push(character);

        this.updateLocalStorage(favorites);
    }

    remove(character: Character): void {
        const favorites = this.favorites.getValue();
        const index = favorites.findIndex((f) => f.id === character.id);

        if (index >= 0) {
            favorites.splice(index, 1);
            this.updateLocalStorage(favorites);
        }
    }

    isFavorite(character: Character): boolean {
        return (
            !!this.favorites &&
            !!this.favorites.getValue().find((f) => f.id === character.id)
        );
    }

    find(character: Character): Character {
        return (
            !!this.favorites &&
            this.favorites.getValue().find((f) => f.id === character.id)
        );
    }

    private updateLocalStorage(favorites: Character[]): void {
        localStorage.setItem(this.FAVORITE_KEY, JSON.stringify(favorites));
        this.favorites.next(favorites);
    }
}
