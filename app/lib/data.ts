import { sql } from '@vercel/postgres';
import { RentImagesType, RentType, ReviewType } from './definitions';

export async function fetchRents() {
    try {
        const data = await sql<RentType>`
        SELECT 
            rents.rent_id,
            rents.location,
            rents.price,
            rents.rating,
            rents.check_in,
            rents.check_out,
            rents.images
        FROM rents
        `;
        return data.rows
    } catch (error) {
        console.error('Database Error:', error);
    }
}

export async function fetchRentById(id: number) {
    try {
        const data = await sql<RentType>`
        SELECT * FROM rents
        WHERE rents.rent_id=${id}
        `;
        return data.rows[0]
    } catch (error) {
        console.error('Database Error:', error);
    }
}

export async function fetchRentImages(id: number) {
    try {
        const data = await sql<RentImagesType>`
        SELECT rents.images FROM rents
        WHERE rents.rent_id=${id}
        `;
        return data.rows[0]
    } catch (error) {
        console.error('Database Error:', error);
    }

}

export async function fetchReviewsById(id: number) {
    try {
        const data = await sql<ReviewType>`
        SELECT * FROM reviews
        WHERE reviews.rent_id=${id}
        `;
        return data.rows
    } catch (error) {
        console.error('Database Error:', error);
    }
}