export type ItemType = {
    id: number;
    title: string;
    location: string;
    price: number;
    images: string[];
    rating: number;
    reviews: {
        name: string;
        profile_image: string;
        rating: number;
        comment: string;
    }[];
    bedrooms: number;
    beds: number;
    bathrooms: number;
    amenities: string[];
    description: string;
    check_in: string;
    check_out: string;
}