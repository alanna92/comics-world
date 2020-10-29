import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'comics',
        loadChildren: () =>
            import('./features/comics/comics.module').then(
                (m) => m.ComicsModule
            ),
    },
    {
        path: 'characters',
        loadChildren: () =>
            import('./features/characters/characters.module').then(
                (m) => m.CharactersModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
