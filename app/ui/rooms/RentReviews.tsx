import { StarIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import React from 'react'

function Review({
    review
}: {
    review: {
        name: string,
        profile_image: string,
        rating: number,
        comment: string
    }
}) {
    const { name, profile_image, rating, comment } = { ...review }
    const starCount = Math.ceil(rating)
    return (
        <>
            <div className="flex items-center gap-2">
                <Image
                    className='rounded-full w-10 object-cover'
                    src={profile_image}
                    alt='avatar1'
                    width={512}
                    height={512}
                />
                <span>{name}</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="flex">
                    {[...Array(starCount)].map((e, i) => (
                        <StarIcon className='w-3' key={i} />
                    ))}
                </div>
                <span>{rating}</span>
            </div>
            <p>
                {comment}
            </p>
        </>
    )
}

function RentReviews({
    reviews
}: {
    reviews: {
        name: string,
        profile_image: string,
        rating: number,
        comment: string
    }[]
}) {

    return (
        <>
            <ul className='grid grid-cols-2 max-sm:grid-cols-1 gap-6 py-4 '>
                {reviews.map((review) => (
                    <li key={review.comment} className='pr-8'>
                        <Review review={review} />
                    </li>
                ))}

                {/* <li className='pr-8'>
                    <Review />
                </li> */}

            </ul>

        </>

    )
}

export default RentReviews
