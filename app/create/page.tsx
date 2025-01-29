'use client';

import { useState } from 'react';
import FormInput from '../ui/create/FormInput'


function page() {
    const [imgCount, setImgCount] = useState(1)
    const [amtCount, setAmtCount] = useState(1)
    const handleIncrementImgCount = () => {
        setImgCount(c => c + 1)
    }
    const handleIncrementAmtCount = () => {
        setAmtCount(c => c + 1)
    }
    return (
        <main className='min-h-screen  flex flex-col items-center py-10'>
            <h1 className='text-2xl font-bold py-4 '>Create Rental Listing</h1>
            <form action="" className='w-full flex flex-col items-center '>
                <div className="py-4 flex flex-col gap-8 w-[1000px] max-lg:w-[750px] max-md:w-full max-md:px-8">
                    <FormInput label='Title' placeholder='Enter title' />
                    <FormInput label='Location' placeholder='Enter location' />
                    <FormInput label='Price' placeholder='Enter Price in USD' />
                    <FormInput label='Bedrooms' placeholder='Enter amount of bedrooms' />
                    <FormInput label='Beds' placeholder='Enter amount of beds' />
                    <FormInput label='Bathrooms' placeholder='Enter amount of bathrooms' />
                    <FormInput label='Description' placeholder='Enter description' />
                    <FormInput label='Check-In' placeholder='Enter check-in date' />
                    <FormInput label='Check-Out' placeholder='Enter check-out date in yyyy-mm-dd format' />
                    {/* <FormInput label='Images' placeholder='Enter Image URL' /> */}
                    {[...Array(imgCount)].map((e, i) => (
                        <FormInput
                            key={i}
                            index={i}
                            count={imgCount}
                            label={i === 0 ? 'Images' : ''}
                            placeholder='Enter Image URL'
                            onIncrementImg={handleIncrementImgCount}
                        />
                    ))}
                    {/* <FormInput label='Amenities' placeholder='Enter amenity' /> */}

                    {[...Array(amtCount)].map((e, i) => (
                        <FormInput
                            key={i}
                            index={i}
                            count={amtCount}
                            label={i === 0 ? 'Amenities' : ' '}
                            placeholder='Enter Image URL'
                            onIncrementAmt={handleIncrementAmtCount}
                        />
                    ))}

                </div>
            </form>
        </main>
    )
}

export default page
