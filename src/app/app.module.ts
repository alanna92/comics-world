import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { NavbarItemComponent } from './core/components/navbar/navbar-item/navbar-item.component';
import { InterceptorModule } from './core/interceptors/interceptor.module';

@NgModule({
    declarations: [AppComponent, NavbarComponent, NavbarItemComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        InterceptorModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
