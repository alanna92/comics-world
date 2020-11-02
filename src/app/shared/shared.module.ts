import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { LoadingComponent } from './components/loading/loading.component';
import { InfoTextComponent } from './components/info-text/info-text.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ItemImgComponent } from './components/item-img/item-img.component';
import { SearchInputComponent } from './components/search-input/search-input.component';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PaginationComponent,
        LoadingComponent,
        InfoTextComponent,
        ListItemComponent,
        ItemImgComponent,
        SearchInputComponent,
    ],
    declarations: [
        PaginationComponent,
        LoadingComponent,
        InfoTextComponent,
        ListItemComponent,
        ItemImgComponent,
        SearchInputComponent,
    ],
    providers: [],
})
export class SharedModule {}
