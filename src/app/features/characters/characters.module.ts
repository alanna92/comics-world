import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersListContainerComponent } from './containers/characters-list-container/characters-list-container.component';
import { FavoriteListContainerComponent } from './containers/favorite-list-container/favorite-list-container.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharactersDetailsContainerComponent } from './containers/characters-details-container/characters-details-container.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharacterDetailsFavoriteBtnComponent } from './components/character-details-favorite-btn/character-details-favorite-btn.component';

@NgModule({
    imports: [SharedModule, CharactersRoutingModule],
    declarations: [
        CharactersListContainerComponent,
        CharactersDetailsContainerComponent,
        CharactersListComponent,
        CharacterDetailsComponent,
        CharacterDetailsFavoriteBtnComponent,
        FavoriteListContainerComponent,
    ],
})
export class CharactersModule {}
