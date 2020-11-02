import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ComicsListContainerComponent } from './containers/comics-list-container/comics-list-container.component';
import { ComicsDetailsContainerComponent } from './containers/comics-details-container/comics-details-container.component';

const routes = [
    {
        path: '',
        component: ComicsListContainerComponent,
    },
    {
        path: ':id',
        component: ComicsDetailsContainerComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ComicsRoutingModule {}
