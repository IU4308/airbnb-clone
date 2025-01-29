'use server';

import { sql } from '@vercel/postgres';

export async function addToWishlist(title: string, image: string, rent_id: number) {

    try {
        await sql`
            INSERT INTO wishlist (title, image, rent_id)
            VALUES (${title}, ${image}, ${rent_id});
        `
    } catch (error) {
        console.log(error)
        return {
            message: 'Database Error: Failed to Add to Wishlist.',
        };
    }

}

export async function deleteFromWishlist(id: number) {
    try {
        await sql`
            DELETE FROM wishlist
            WHERE rent_id = ${id}
        `
    } catch (error) {
        console.log(error)
        return {
            message: 'Database Error: Failed to Delete from Wishlist.',
        };
    }
}