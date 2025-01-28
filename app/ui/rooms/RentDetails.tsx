import { StarIcon } from '@heroicons/react/16/solid';

function RentDetails({
    location,
    bedrooms,
    beds,
    bathrooms,
    rating,
    reviewsCount,
    description,
    amenities
}: {
    location: string;
    bedrooms: number;
    beds: number;
    bathrooms: number;
    rating: number;
    reviewsCount: number;
    description: string;
    amenities: string[];
}) {
    return (
        <div className='w-[50%] max-md:w-full flex flex-col gap-1'>
            <div className='border-b py-4 border-gray-200'>
                <p className='font-bold text-xl'>{location}</p>
                <ul className='flex gap-2 text-sm text-gray-500'>
                    <li key='bedrooms'>
                        <span>{bedrooms}</span>&nbsp;
                        <span>bedrooms</span>
                    </li>
                    <li key='beds' className='list-disc list-inside'>
                        <span>{beds}</span>&nbsp;
                        <span>beds</span>
                    </li>
                    <li key='bathrooms' className='list-disc list-inside'>
                        <span>{bathrooms}</span>&nbsp;
                        <span>bath</span>
                    </li>
                </ul>
                <ul className='flex gap-4'>
                    <li key='rating' className='flex gap-1'>
                        <StarIcon className='w-3' />
                        <span>{rating}</span>
                    </li>
                    <li key='review-count' className='list-disc list-inside'>
                        <span>{reviewsCount}</span>&nbsp;
                        <span>reviews</span>
                    </li>
                </ul>
            </div>
            <div className='py-4 border-b border-gray-200'>
                {description}
            </div>
            <h2 className='text-2xl font-semibold pt-2'>What this place offers</h2>
            <ul className='grid grid-cols-2 gap-2 py-4 border-b border-gray-200'>
                {amenities.map((amenity) => (
                    <li key={amenity}>{amenity}</li>
                ))}
            </ul>
        </div>
    )
}

export default RentDetails
