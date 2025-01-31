import { fetchReviewsById } from '@/app/lib/data';
import RentReviews from '@/app/ui/rooms/RentReviews';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Rent Review',
};

async function page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id
    const rentReviews = await fetchReviewsById(Number(id));

    return (
        <main className='p-10 max-w-7xl mx-auto'>
            <RentReviews rentReviews={rentReviews} />
        </main>
    )
}

export default page
