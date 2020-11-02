import { Thumbnail } from './thumbnail';

export interface MarvelItem {
    id: number;
    title: string;
    description: string;
    thumbnail: Thumbnail;
}
