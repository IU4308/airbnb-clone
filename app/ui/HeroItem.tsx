import Image from 'next/image'
import React from 'react'
import { StarIcon } from '@heroicons/react/16/solid'
import { HeartIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { ItemType, RentType } from '../lib/definitions'
import { formateDate } from '../lib/utils'

function HeroItem({ rent }: { rent: RentType }) {
    const { rent_id, location, price, rating, images, check_in, check_out } = { ...rent }
    // console.log(JSON.stringify(images))
    // console.log(images)
    const check_in_date = formateDate(check_in)
    const check_out_date = formateDate(check_out)
    return (
        <>
            <Link href={`/rooms/${rent_id}`} className='flex flex-col relative cursor-pointer gap-2 p-2'>
                <HeartIcon className='w-6 absolute text-white top-2 right-2' />
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
        </>
    )
}

export default HeroItem
