import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from './components/pagination/pagination.component';
import { LoadingComponent } from './components/loading/loading.component';
import { InfoTextComponent } from './components/info-text/info-text.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ItemImgComponent } from './components/item-img/item-img.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { BackBtnComponent } from './components/back-btn/back-btn.component';
import { FavoriteBtnComponent } from './components/favorite-btn/favorite-btn.component';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
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
        BackBtnComponent,
        FavoriteBtnComponent,
    ],
    declarations: [
        PaginationComponent,
        LoadingComponent,
        InfoTextComponent,
        ListItemComponent,
        ItemImgComponent,
        SearchInputComponent,
        BackBtnComponent,
        FavoriteBtnComponent,
    ],
    providers: [],
})
export class SharedModule {}
