import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ComicsListPageComponent } from './comics-list-page/comics-list-page.component';

const routes = [
    {
        path: '',
        component: ComicsListPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ComicsRoutingModule {}
