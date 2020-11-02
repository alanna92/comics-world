export class UrlParams {
    private page: number;

    private limit: number;

    private params: unknown;

    constructor(page: number, limit: number, params: unknown) {
        this.page = page;
        this.limit = limit;
        this.params = params;
    }

    public getUrlWithParams(baseUrl: string): string {
        const offset = this.page * this.limit;

        const queryString = Object.keys(this.params)
            .filter((key) => !!this.params[key])
            .map((key) => `${key}=${this.params[key]}`)
            .join('&');

        return `${baseUrl}?offset=${offset}&${queryString}`;
    }
}
