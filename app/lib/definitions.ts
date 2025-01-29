
export type RentType = {
    rent_id: number;
    title: string;
    location: string;
    price: number;
    images: string[];
    rating: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
    amenities: string[];
    description: string;
    check_in: string;
    check_out: string;
}

export type RentImagesType = {
    images: string[]
}

export type ReviewType = {
    review_id: string,
    name: string,
    profile_image: string,
    rating: number,
    comment: string,
    rent_id: number
}

export type DateType = {
    weekDay: string;
    month: string;
    day: string;
    year: string;
    str: string
}