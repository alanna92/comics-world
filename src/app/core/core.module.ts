import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';

import { NavbarItemComponent } from './components/navbar/navbar-item/navbar-item.component';
import { HttpRequestInterceptor } from './interceptors/http-request-interceptor';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [NavbarComponent, NavbarItemComponent],
    declarations: [NavbarComponent, NavbarItemComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpRequestInterceptor,
            multi: true,
        },
    ],
})
export class CoreModule {}
