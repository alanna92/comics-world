import { Component, Input } from '@angular/core';
import { Character } from '../../models/character';

@Component({
    selector: 'app-characters-list',
    templateUrl: 'characters-list.component.html',
    styleUrls: ['characters-list.component.scss'],
})
export class CharactersListComponent {
    @Input()
    characters: Character[];
}
