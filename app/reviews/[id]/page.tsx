import { fetchReviewsById } from '@/app/lib/data';
import { reviews } from '@/app/lib/placeholder-data'
import RentReviews from '@/app/ui/rooms/RentReviews';
import React from 'react'

async function page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id
    const rentReviews = await fetchReviewsById(Number(id));

    // const rentReviews = reviews.filter(review => review.rent_id === Number(id))

    return (
        <main className='p-10 max-w-[2560] mx-auto'>
            <RentReviews rentReviews={rentReviews!} />
        </main>
    )
}

export default page
