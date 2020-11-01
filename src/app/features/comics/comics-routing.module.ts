import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ComicsListContainerComponent } from './containers/comics-list-container/comics-list-container.component';

const routes = [
    {
        path: '',
        component: ComicsListContainerComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ComicsRoutingModule {}
