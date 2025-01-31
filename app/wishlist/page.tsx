import React from 'react'
import ImageItem from '../ui/rooms/ImageItem'
import Link from 'next/link'
import { fetchWishlistItems } from '../lib/data'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Wishlist',
};

async function page() {
    const items = await fetchWishlistItems()
    // console.log(items)
    return (
        <main className='p-10 max-sm:p-0 flex justify-center'>
            <ul className='w-ful max-w-8xl gap-y-14 p-6 grid grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 max-xl:grid-cols-3 max-md:grid-cols-2 max-xs:grid-cols-1 max-lg:gap-2 gap-6 max-lg:gap-y-10'>
                {items?.map(item => (
                    <li key={item.id} className=''>
                        <Link href={`/rooms/${item.rent_id}`} className='flex flex-col gap-2'>
                            <ImageItem image={item.image} classname='h-[50vh] max-h-[500px]' />
                            <p className='text-xl font-semibold'>{item.title}</p>

                        </Link>
                    </li>
                ))}
                {/* <li >
                    <Link href='/rooms/1' className='flex flex-col gap-2'>
                        <ImageItem image='/image1-1.jpg' />
                        <p className='text-xl font-semibold'>Modern Apartment in Downtown</p>
                    </Link>
                </li> */}
            </ul>

        </main>
    )
}

export default page
