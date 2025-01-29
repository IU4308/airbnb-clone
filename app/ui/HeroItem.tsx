import Image from 'next/image'
import React from 'react'
import { StarIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import { RentType } from '../lib/definitions'
import { formateDate } from '../lib/utils'
import AddToWishlist from './AddToWishlist'
import { fetchWishlistItemCount } from '../lib/data'

async function HeroItem({ rent }: { rent: RentType }) {
    const { rent_id, title, location, price, rating, images, check_in, check_out } = { ...rent }
    const countObj = await fetchWishlistItemCount(rent_id)
    const isInWishlist = !!Number(countObj!.count)
    // console.log(count)
    const check_in_date = formateDate(check_in)
    const check_out_date = formateDate(check_out)

    return (
        <div className='relative'>
            <AddToWishlist
                classname='w-6 absolute text-white top-4 right-2 hover:opacity-50 active:opacity-40'
                isInWishlist={isInWishlist}
                title={title!}
                image={images![0]}
                id={rent_id!}
                path='/'
            />
            <Link href={`/rooms/${rent_id}`} className='flex flex-col  cursor-pointer gap-2 p-2'>
                {/* <button className='w-6 absolute text-white top-2 right-2 hover:opacity-50 active:opacity-40'>
                    <HeartIcon />
                </button> */}
                <Image
                    src={images[0]} alt='hero' width={1024} height={1024}
                    className='object-cover h-[40vh] rounded-lg'
                />
                <h1 className=' flex justify-between'>
                    <span className='font-bold'>{location}</span>
                    <span className='flex'>
                        <StarIcon className='w-4' />
                        <span>{rating}</span>
                    </span>
                </h1>
                <p className='text-gray-500'>
                    {check_in_date.month} {check_in_date.day} - {check_in_date.month === check_out_date.month ? '' : `${check_out_date.month} `}{check_out_date.day}
                </p>
                <p><span className='font-bold'>{price}$</span>&nbsp;night</p>
            </Link>
        </div>
    )
}

export default HeroItem
