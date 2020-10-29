import { Component } from '@angular/core';
import { NavbarItem } from './navbar-item/navbar-item';

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.scss'],
})
export class NavbarComponent {
    public logoSrc = '../../assets/logo.png';

    public links: NavbarItem[] = [
        {
            label: 'Comics',
            link: ['comics'],
        },
        {
            label: 'Characters',
            link: ['characters'],
        },
    ];
}
