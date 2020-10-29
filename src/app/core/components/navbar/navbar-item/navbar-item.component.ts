import { Component, Input } from '@angular/core';
import { NavbarItem } from './navbar-item';

@Component({
    selector: 'app-navbar-item',
    templateUrl: 'navbar-item.component.html',
    styleUrls: ['navbar-item.component.scss'],
})
export class NavbarItemComponent {
    @Input()
    item: NavbarItem;
}
