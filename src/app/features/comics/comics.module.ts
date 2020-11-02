import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { ComicsListContainerComponent } from './containers/comics-list-container/comics-list-container.component';
import { ComicsRoutingModule } from './comics-routing.module';
import { ComicsListComponent } from './components/comics-list/comics-list.component';
import { ComicsDetailsContainerComponent } from './containers/comics-details-container/comics-details-container.component';
import { ComicDetailsComponent } from './components/comic-details/comic-details.component';

@NgModule({
    imports: [SharedModule, ComicsRoutingModule],
    declarations: [
        ComicsListContainerComponent,
        ComicsDetailsContainerComponent,
        ComicsListComponent,
        ComicDetailsComponent,
    ],
})
export class ComicsModule {}
