import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Comic } from './comic';
import { MarvelAPIResponse } from '../../shared/models/marvel-api-response';

@Injectable()
export class ComicsService {
    private baseUrl = `${environment.apiUrl}/comics`;

    constructor(private readonly http: HttpClient) {}

    list(): Observable<Comic[]> {
        return this.http
            .get<MarvelAPIResponse>(this.baseUrl)
            .pipe(map((response) => response.data.results as Comic[]));
    }
}
