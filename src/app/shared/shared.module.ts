import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { LoadingComponent } from './components/loading/loading.component';
import { InfoTextComponent } from './components/info-text/info-text.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ItemImgComponent } from './components/item-img/item-img.component';

@NgModule({
    imports: [CommonModule],
    exports: [
        CommonModule,
        PaginationComponent,
        LoadingComponent,
        InfoTextComponent,
        ListItemComponent,
        ItemImgComponent,
    ],
    declarations: [
        PaginationComponent,
        LoadingComponent,
        InfoTextComponent,
        ListItemComponent,
        ItemImgComponent,
    ],
    providers: [],
})
export class SharedModule {}
