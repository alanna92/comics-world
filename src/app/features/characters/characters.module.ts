import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CharactersListPageComponent } from './characters-list-page/characters-list-page.component';
import { CharactersRoutingModule } from './characters-routing.module';

@NgModule({
    imports: [CommonModule, CharactersRoutingModule],
    declarations: [CharactersListPageComponent],
})
export class CharactersModule {}
