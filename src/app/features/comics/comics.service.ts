import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Comic } from './comic';
import { MarvelAPIResponse } from '../../shared/models/marvel-api-response';

@Injectable()
export class ComicsService {
    private baseUrl = `${environment.apiUrl}/comics`;

    private comics = new BehaviorSubject<Comic[]>([]);

    readonly comics$ = this.comics.asObservable();

    constructor(private readonly http: HttpClient) {}

    load(offset = 0): void {
        this.http
            .get<MarvelAPIResponse>(`${this.baseUrl}?offset=${offset}`)
            .subscribe(
                (response) => {
                    this.comics.next(response.data.results as Comic[]);
                },
                (error) => console.log(error)
            );
    }
}
