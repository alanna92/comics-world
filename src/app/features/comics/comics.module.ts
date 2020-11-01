import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ComicsListContainerComponent } from './containers/comics-list-container/comics-list-container.component';
import { ComicsRoutingModule } from './comics-routing.module';
import { ComicsListComponent } from './components/comics-list/comics-list.component';
import { ComicImgComponent } from './components/comic-img/comic-img.component';

@NgModule({
    imports: [CommonModule, ComicsRoutingModule],
    declarations: [
        ComicsListContainerComponent,
        ComicsListComponent,
        ComicImgComponent,
    ],
})
export class ComicsModule {}
