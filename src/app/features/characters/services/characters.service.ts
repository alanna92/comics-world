import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
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

    load(offset = 0): void {
        this.isUpdating$.next(true);
        this.http
            .get<MarvelAPIResponse>(
                `${this.baseUrl}?offset=${offset * this.LIMIT}`
            )
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
