import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CharactersListContainerComponent } from './containers/characters-list-container/characters-list-container.component';

const routes = [
    {
        path: '',
        component: CharactersListContainerComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CharactersRoutingModule {}
