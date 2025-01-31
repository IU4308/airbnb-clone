'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod'

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

const FormSchema = z.object({
    title: z.string({
        invalid_type_error: 'Please enter a title.',
    }).nonempty({
        message: 'Title should not be empty.',
    }),
    location: z.string({
        invalid_type_error: 'Please enter a location.',
    }).nonempty({
        message: 'Location should not be empty.',
    }),
    price: z.coerce.number().gt(0, { message: 'Please enter a price greater than $0.' }),
    bedrooms: z.coerce.number({
        invalid_type_error: 'Please enter the number of bedrooms.',
    }),
    beds: z.coerce.number({
        invalid_type_error: 'Please enter the number of beds.',
    }),
    bathrooms: z.coerce.number({
        invalid_type_error: 'Please enter the number of bathrooms.',
    }),
    description: z.string({
        invalid_type_error: 'Please enter a description.',
    }),
    check_in: z.string().refine((date) => {
        return /^\d{4}-\d{2}-\d{2}$/.test(date);
    }, {
        message: 'Please enter a valid check-in date in the format yyyy-mm-dd.',
    }),
    check_out: z.string().refine((date) => {
        return /^\d{4}-\d{2}-\d{2}$/.test(date);
    }, {
        message: 'Please enter a valid check-out date in the format yyyy-mm-dd.',
    }),
    images: z.array(z.string().url({
        message: 'Please enter a valid image URL.',
    })).nonempty({
        message: 'Please enter at least one image URL.',
    }).refine((arr) => new Set(arr).size === arr.length, {
        message: 'Images must be unique.',
    }),
    amenities: z.array(z.string().nonempty({
        message: 'Please enter an amenity.',
    })).nonempty({
        message: 'Please enter at least one amenity.',
    }).refine((arr) => new Set(arr).size === arr.length, {
        message: 'Amenities must be unique.',
    }),

})

export type State = {
    errors?: {
        title?: string[];
        location?: string[];
        price?: string[];
        bedrooms?: string[];
        beds?: string[];
        bathrooms?: string[];
        description?: string[];
        check_in?: string[];
        check_out?: string[];
        images?: string[];
        amenities?: string[];

    };
    message?: string | null;
};

export async function createRent(prevState: State, formData: FormData) {


    const getArrays = () => {
        const amtArr = []
        const imgArr = []
        for (const pair of formData.entries()) {
            if (pair[0].startsWith('amenities')) {
                if (pair[1] !== '') {
                    amtArr.push(pair[1])
                }
            } else if (pair[0].startsWith('images')) {
                if (pair[1] !== '') {
                    imgArr.push(pair[1])
                }
            }
        }
        return { amtArr, imgArr }
    }


    const arrObj = getArrays()

    const validatedFields = FormSchema.safeParse({
        title: formData.get('title'),
        location: formData.get('location'),
        price: formData.get('price'),
        bedrooms: formData.get('bedrooms'),
        beds: formData.get('beds'),
        bathrooms: formData.get('bathrooms'),
        description: formData.get('description'),
        check_in: formData.get('check_in'),
        check_out: formData.get('check_out'),
        images: arrObj.imgArr,
        amenities: arrObj.amtArr,
    });


    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Rental Listing.',
        };
    }

    const { title, location, price, bedrooms, beds, bathrooms, description, check_in, check_out, images, amenities } = validatedFields.data;

    try {
        await sql`
            INSERT INTO rents (title, location, price, bedrooms, beds, bathrooms, description, check_in, check_out, images, amenities)
            VALUES (${title}, ${location}, ${price}, ${bedrooms}, ${beds}, ${bathrooms}, ${description}, ${check_in}, ${check_out}, ${JSON.stringify(images)}, ${JSON.stringify(amenities)} )
            
        `
    } catch (error) {
        console.log(error)
        return {
            message: 'Database Error: Failed to Create Rental Listing.',
        };
    }

    revalidatePath('/');
    redirect('/');

}