import { Thumbnail } from '../../../shared/models/thumbnail';
import { MarvelItem } from '../../../shared/models/marvel-item';

export class Comic implements MarvelItem {
    id: number;

    title: string;

    description: string;

    thumbnail: Thumbnail;
}
