import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CharactersListContainerComponent } from './containers/characters-list-container/characters-list-container.component';
import { CharactersDetailsContainerComponent } from './containers/characters-details-container/characters-details-container.component';

const routes = [
    {
        path: '',
        component: CharactersListContainerComponent,
    },
    {
        path: ':id',
        component: CharactersDetailsContainerComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CharactersRoutingModule {}
