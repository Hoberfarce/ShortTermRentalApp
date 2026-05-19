export class Property {
    id!: number;
    title!: string;
    tags?: string[];
    description!: string;
    pricePerNight!: number;
    location!: string;
    imageUrl!: string;
    luxuryVerified?: boolean;

    constructor(id: number, title: string, tags: string[], description: string, pricePerNight: number, location: string, imageUrl: string) {
        this.id = id;
        this.title = title;
        this.tags = tags;
        this.description = description;
        this.pricePerNight = pricePerNight;
        this.location = location;
        this.imageUrl = imageUrl;
    }
}