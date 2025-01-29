import RentImages from '@/app/ui/rooms/RentImages';
import RentDetails from '@/app/ui/rooms/RentDetails';
import ReservationCard from '@/app/ui/rooms/ReservationCard';
import RentReviews from '@/app/ui/rooms/RentReviews';
import Link from 'next/link';
import { fetchRentById, fetchReviewsById, fetchWishlistItemCount } from '@/app/lib/data';
import { formateDate } from '@/app/lib/utils';
import AddToWishlist from '@/app/ui/AddToWishlist';

async function page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;

    const [rent, rentReviews, countInWishlistObj] = await Promise.all([
        await fetchRentById(Number(id)),
        await fetchReviewsById(Number(id)),
        await fetchWishlistItemCount(Number(id))
    ])
    const isInWishlist = !!Number(countInWishlistObj!.count)

    const { rent_id, title, images, location, price, bedrooms, beds, bathrooms, rating, description, amenities, check_in, check_out } = { ...rent };
    const reviewsCount = rentReviews?.length ?? 0
    const check_in_date = formateDate(check_in!)
    const check_out_date = formateDate(check_out!)
    return (
        <main className='flex justify-center min-h-screen'>
            <div className="max-w-7xl max-xl:w-[1024] max-md:w max-lg:w-[768] max-md:w-full px-4 py-6 flex flex-col gap-6">
                <div className="w-full flex justify-between items-center">
                    <span className='text-2xl font-bold'>{title}</span>
                    {/* <div className="flex gap-2 border-4"> */}
                    <AddToWishlist
                        classname='w-6 h-6 '
                        path={`/rooms/${rent_id}`}
                        isInWishlist={isInWishlist}
                        title={title!}
                        image={images![0]}
                        id={rent_id!}
                    />
                    {/* <HeartIcon className="w-6 h-6" />
                        <span>Save</span> */}
                    {/* </div> */}
                </div>
                <RentImages
                    images={images!}
                    id={rent_id!}
                />
                <div className='flex justify-between items-start'>
                    <RentDetails
                        location={location!}
                        bedrooms={bedrooms!}
                        beds={beds!}
                        bathrooms={bathrooms!}
                        rating={rating}
                        reviewsCount={reviewsCount!}
                        description={description!}
                        amenities={amenities!}
                    />
                    <ReservationCard
                        price={price!}
                        check_in_date={check_in_date!}
                        check_out_date={check_out_date!}
                    />
                </div>
                <RentReviews
                    rentReviews={rentReviews}
                />
                {reviewsCount > 6 &&
                    <Link href={`/reviews/${rent_id}`}>
                        <div className="xl:w-[20%] flex justify-center border border-black rounded-xl px-4 py-2 mb-16">
                            <span> Show All Reviews</span>
                        </div>
                    </Link>}
            </div >
        </main >
    )
}

export default page
