import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ComicsListPageComponent } from './comics-list-page/comics-list-page.component';
import { ComicsRoutingModule } from './comics-routing.module';

@NgModule({
    imports: [CommonModule, ComicsRoutingModule],
    declarations: [ComicsListPageComponent],
})
export class ComicsModule {}
