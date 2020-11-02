import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
    imports: [CommonModule],
    exports: [CommonModule, PaginationComponent, LoadingComponent],
    declarations: [PaginationComponent, LoadingComponent],
    providers: [],
})
export class SharedModule {}
