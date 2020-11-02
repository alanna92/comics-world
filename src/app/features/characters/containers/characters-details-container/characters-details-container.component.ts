import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CharactersService } from '../../services/characters.service';
import { Character } from '../../models/character';

@Component({
    selector: 'app-characters-details',
    templateUrl: 'characters-details-container.component.html',
    styleUrls: ['characters-details-container.component.scss'],
})
export class CharactersDetailsContainerComponent implements OnInit {
    character$: Observable<Character>;

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly charactersServive: CharactersService
    ) {}

    ngOnInit(): void {
        const { id } = this.activatedRoute.snapshot.params;
        this.character$ = this.charactersServive.getCharacter(+id);
    }
}
