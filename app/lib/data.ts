import { sql } from '@vercel/postgres';
import { RentImagesType, RentType, ReviewType, WishlistItem, WishListItemCount } from './definitions';

const ITEMS_PER_PAGE = 16;

export async function fetchRents() {
    try {
        const data = await sql<RentType>`
        SELECT 
            rents.rent_id,
            rents.title,
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

export async function fetchFilteredRents(
    query: string,
    currentPage: number,
) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        const data = await sql<RentType>`
        SELECT 
            rents.rent_id,
            rents.title,
            rents.location,
            rents.price,
            rents.rating,
            rents.check_in,
            rents.check_out,
            rents.images
        FROM rents
        WHERE
            rents.location ILIKE ${`%${query}%`} 
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `;

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch rents.');
    }
}

export async function fetchRentsPages(query: string) {
    try {
        const count = await sql`
        SELECT COUNT(*)
        FROM rents
        WHERE
            rents.location ILIKE ${`%${query}%`} 
        ;
        `;
        const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
        return totalPages;
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

export async function fetchWishlistItemCount(id: number) {
    try {
        const data = await sql<WishListItemCount>`
            SELECT COUNT(rent_id)
            FROM wishlist
            WHERE rent_id = ${id};
        `;
        return data.rows[0]

    } catch (error) {
        console.error('Database Error:', error);
    }
}

export async function fetchWishlistItems() {
    try {
        const data = await sql<WishlistItem>`
            SELECT *
            FROM wishlist;
        `;
        return data.rows

    } catch (error) {
        console.error('Database Error:', error);
    }
}

