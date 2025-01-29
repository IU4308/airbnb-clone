'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

export async function addToWishlist(title: string, image: string, rent_id: number, path: string) {

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
    // console.log(path)
    revalidatePath(path);

}

export async function deleteFromWishlist(id: number, path: string) {
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

    revalidatePath(path);
}