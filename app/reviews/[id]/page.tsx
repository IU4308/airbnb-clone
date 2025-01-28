import { list } from '@/app/lib/placeholder';
import RentReviews from '@/app/ui/rooms/RentReviews';
import React from 'react'

async function page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id
    const item = list.find((item) => item.id === Number(id))
    return (
        <main className='p-10 max-w-[2560] mx-auto'>
            <RentReviews reviews={item!.reviews} />
            <RentReviews reviews={item!.reviews} />
            <RentReviews reviews={item!.reviews} />
            <RentReviews reviews={item!.reviews} />
            <RentReviews reviews={item!.reviews} />
            <RentReviews reviews={item!.reviews} />
        </main>
    )
}

export default page
