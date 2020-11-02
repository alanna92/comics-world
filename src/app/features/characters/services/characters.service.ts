import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { UrlParams } from '../../../shared/models/url-params';
import { environment } from '../../../../environments/environment';
import { Character } from '../models/character';
import { MarvelAPIResponse } from '../../../shared/models/marvel-api-response';

@Injectable({ providedIn: 'root' })
export class CharactersService {
    private LIMIT = 20;

    private baseUrl = `${environment.apiUrl}/characters`;

    private characters = new BehaviorSubject<Character[]>([]);

    readonly characters$ = this.characters.asObservable();

    private isUpdating$ = new BehaviorSubject<boolean>(false);

    constructor(private readonly http: HttpClient) {}

    getIsUpdating(): Observable<boolean> {
        return this.isUpdating$.asObservable();
    }

    load(page = 0, searchText = ''): void {
        const urlParams = new UrlParams(page, this.LIMIT, {
            nameStartsWith: searchText.trim(),
        });

        const url = urlParams.getUrlWithParams(this.baseUrl);

        this.isUpdating$.next(true);
        this.http
            .get<MarvelAPIResponse>(url)
            .pipe(finalize(() => this.isUpdating$.next(false)))
            .subscribe(
                (response) => {
                    this.characters.next(
                        response.data.results.map((r) => new Character(r))
                    );
                },
                (error) => console.log(error)
            );
    }

    getCharacter(id: number): Observable<Character> {
        this.isUpdating$.next(true);
        return this.http.get<MarvelAPIResponse>(`${this.baseUrl}/${id}`).pipe(
            finalize(() => this.isUpdating$.next(false)),
            map((response) => new Character(response.data.results[0]))
        );
    }
}
