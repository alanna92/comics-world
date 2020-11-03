export interface MarvelAPIResponse {
    data: {
        results: unknown[];
        total: number;
        limit: number;
    };
}
