import { Thumbnail } from '../../../shared/models/thumbnail';
import { MarvelItem } from '../../../shared/models/marvel-item';

export class Comic implements MarvelItem {
    id: number;

    title: string;

    description: string;

    thumbnail: Thumbnail;

    constructor(data: unknown) {
        Object.assign(this, data);
    }

    getImgSrc(): string {
        if (!this.thumbnail) {
            return '';
        }
        return `${this.thumbnail.path}.${this.thumbnail.extension}`;
    }
}
