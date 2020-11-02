import { Component, Input } from '@angular/core';
import { Character } from '../../models/character';

@Component({
    selector: 'app-character-details',
    templateUrl: 'character-details.component.html',
    styleUrls: ['character-details.component.scss'],
})
export class CharacterDetailsComponent {
    @Input()
    character: Character;
}
