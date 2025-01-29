import { db } from '@vercel/postgres';
import { rents, reviews } from '@/app/lib/placeholder-data'

const array = ['/img1.jpg', '/img2.jpg', 'img3.jpg']
const jsonArr = JSON.stringify(array)
console.log(`${jsonArr}`)

const client = await db.connect();

async function seedRentList() {
    await client.sql`
        CREATE TABLE IF NOT EXISTS rents (
            rent_id SERIAL NOT NULL PRIMARY KEY,
            title VARCHAR(50) NOT NULL,
            location VARCHAR(50) NOT NULL,
            price INT NOT NULL,
            rating DECIMAL(2,1) NOT NULL,
            bedrooms INT NOT NULL,
            beds INT NOT NULL,
            bathrooms INT NOT NULL,
            description TEXT NOT NULL,
            check_in DATE NOT NULL,
            check_out DATE NOT NULL,
            images JSONB NOT NULL,
            amenities JSONB NOT NULL
        );
    `;

    //${jsonArr}

    const insertedRents = await Promise.all(
        rents.map(async (rent) => client.sql`
            INSERT INTO rents (rent_id, title, location, price, rating, bedrooms, beds, bathrooms, description, check_in, check_out, images, amenities)
            VALUES (${rent.rent_id}, ${rent.title}, ${rent.location}, ${rent.price}, ${rent.rating}, ${rent.bedrooms}, ${rent.beds}, ${rent.bathrooms}, ${rent.description}, ${rent.check_in}, ${rent.check_out}, ${JSON.stringify(rent.images)}, ${JSON.stringify(rent.amenities)} )
            ON CONFLICT (rent_id) DO NOTHING;
        `)
    );

    return insertedRents;
}

async function seedImages() {

}

async function seedReviews() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    await client.sql`
        CREATE TABLE IF NOT EXISTS reviews (
            review_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            name VARCHAR(255),
            profile_image VARCHAR(255) NOT NULL,
            rating DECIMAL(2,1) NOT NULL,
            comment TEXT NOT NULL,
            rent_id INT NOT NULL
        );
    `;

    const insertedReviews = await Promise.all(
        reviews.map(
            review => client.sql`
                INSERT INTO reviews (name, profile_image, rating, comment, rent_id)
                VALUES (${review.name}, ${review.profile_image}, ${review.rating}, ${review.comment}, ${review.rent_id});
            `
        )
    );

    return insertedReviews;
}

export async function GET() {

    try {
        await client.sql`BEGIN`;
        await seedRentList();
        // await seedReviews();
        await client.sql`COMMIT`;

        return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
        await client.sql`ROLLBACK`;
        console.log(error)
        return Response.json({ error }, { status: 500 });
    }
}