import { HeartIcon } from '@heroicons/react/24/outline';
import RentImages from '@/app/ui/rooms/RentImages';
import RentDetails from '@/app/ui/rooms/RentDetails';
import ReservationCard from '@/app/ui/rooms/ReservationCard';
import RentReviews from '@/app/ui/rooms/RentReviews';
import Link from 'next/link';
import { list } from '@/app/lib/placeholder'

async function page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id
    const item = list.find((item) => item.id === Number(id))
    const { title, images, location, price, bedrooms, beds, bathrooms, rating, reviews, description, amenities, check_in, check_out } = { ...item }
    const reviewsCount = reviews?.length ?? 0
    // console.log(images)
    return (
        <main className='flex justify-center'>
            <div className="w-[1280] max-xl:w-[1024] max-md:w max-lg:w-[768] max-md:w-full px-4 py-6 flex flex-col gap-6">
                <div className="w-full flex justify-between items-center">
                    <span className='text-2xl font-bold'>{title}</span>
                    <div className="flex gap-2">
                        <HeartIcon className="w-6 h-6" />
                        <span>Save</span>
                    </div>
                </div>
                <RentImages
                    images={images!}
                    id={id}
                />
                <div className='flex justify-between items-start'>
                    <RentDetails
                        location={location!}
                        bedrooms={bedrooms!}
                        beds={beds!}
                        bathrooms={bathrooms!}
                        rating={rating!}
                        reviewsCount={reviewsCount!}
                        description={description!}
                        amenities={amenities!}
                    />
                    <ReservationCard
                        price={price!}
                        check_in={check_in!}
                        check_out={check_out!}
                    />
                </div>
                <RentReviews
                    reviews={reviews!}
                />
                {reviewsCount > 6 &&
                    <Link href={`/reviews/${id}`}>
                        <div className="xl:w-[20%] flex justify-center border border-black rounded-xl px-4 py-2 mb-16">
                            <span> Show All Reviews</span>
                        </div>
                    </Link>}
            </div >
        </main >
    )
}

export default page
