import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersListContainerComponent } from './containers/characters-list-container/characters-list-container.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';

@NgModule({
    imports: [SharedModule, CharactersRoutingModule],
    declarations: [CharactersListContainerComponent, CharactersListComponent],
})
export class CharactersModule {}
