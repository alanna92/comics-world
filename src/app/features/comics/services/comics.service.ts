import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { UrlParams } from '../../../shared/models/url-params';
import { environment } from '../../../../environments/environment';
import { Comic } from '../models/comic';
import { MarvelAPIResponse } from '../../../shared/models/marvel-api-response';

@Injectable({ providedIn: 'root' })
export class ComicsService {
    private LIMIT = 20;

    private baseUrl = `${environment.apiUrl}/comics`;

    private comics = new BehaviorSubject<Comic[]>([]);

    readonly comics$ = this.comics.asObservable();

    private isUpdating$ = new BehaviorSubject<boolean>(false);

    constructor(private readonly http: HttpClient) {}

    getIsUpdating(): Observable<boolean> {
        return this.isUpdating$.asObservable();
    }

    load(page = 0, search = ''): void {
        const urlParams = new UrlParams(page, this.LIMIT, {
            titleStartsWith: search.trim(),
        });
        const url = urlParams.getUrlWithParams(this.baseUrl);

        this.isUpdating$.next(true);
        this.http
            .get<MarvelAPIResponse>(url)
            .pipe(finalize(() => this.isUpdating$.next(false)))
            .subscribe(
                (response) => {
                    this.comics.next(
                        response.data.results.map((r) => new Comic(r))
                    );
                },
                (error) => console.log(error)
            );
    }

    getComic(id: number): Observable<Comic> {
        this.isUpdating$.next(true);
        return this.http.get<MarvelAPIResponse>(`${this.baseUrl}/${id}`).pipe(
            finalize(() => this.isUpdating$.next(false)),
            map((response) => new Comic(response.data.results[0]))
        );
    }
}
