import { Thumbnail } from '../../../shared/models/thumbnail';

export class Character {
    id: number;

    name: string;

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
