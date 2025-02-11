import { ReviewType } from '@/app/lib/definitions'
import { StarIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import React from 'react'

function Review({
    review
}: {
    review: ReviewType
}) {
    const { name, profile_image, rating, comment } = { ...review }
    const starCount = Math.ceil(rating)
    return (
        <>
            <div className="flex items-center gap-2">
                <Image
                    className='rounded-full w-10 object-cover'
                    src={profile_image}
                    alt={profile_image}
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
    rentReviews
}: {
    rentReviews: ReviewType[] | undefined
}) {
    return (
        <>
            {rentReviews?.length
                ? <ul className='grid grid-cols-2 max-sm:grid-cols-1 gap-6 py-4 '>
                    {rentReviews.map((review) => (
                        <li key={review.comment} className='pr-8'>
                            <Review review={review} />
                        </li>
                    ))}

                </ul>
                : <p className='text-2xl'>No Reviews</p>}

        </>

    )
}

export default RentReviews
