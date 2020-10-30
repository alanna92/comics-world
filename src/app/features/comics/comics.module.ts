import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ComicsListPageComponent } from './comics-list-page/comics-list-page.component';
import { ComicsRoutingModule } from './comics-routing.module';
import { ComicsContainerComponent } from './components/comics-container/comics-container.component';
import { ComicImgComponent } from './components/comic-img/comic-img.component';

@NgModule({
    imports: [CommonModule, ComicsRoutingModule],
    declarations: [
        ComicsListPageComponent,
        ComicsContainerComponent,
        ComicImgComponent,
    ],
})
export class ComicsModule {}
