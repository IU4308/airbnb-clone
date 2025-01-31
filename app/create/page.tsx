'use client';

import { useActionState, useState } from 'react';
import FormInput from '../ui/create/FormInput'
import FormInputList from '../ui/create/FormInputList';
import { createRent, State } from '../lib/action';


function Page() {
    const [imgCount, setImgCount] = useState<number>(1)
    const [amtCount, setAmtCount] = useState<number>(1)
    const handleIncrementImgCount = () => {
        setImgCount(c => c + 1)
    }
    const handleIncrementAmtCount = () => {
        setAmtCount(c => c + 1)
    }

    const initialState: State = { message: '', errors: {} };

    const [state, formAction] = useActionState(createRent, initialState);

    return (
        <main className='min-h-screen  flex flex-col items-center py-10'>
            <h1 className='text-2xl font-bold py-4 '>Create Rental Listing</h1>
            <form
                action={formAction}
                className='w-full flex flex-col items-center '
            >
                <div className="py-4 flex flex-col gap-8 w-[1000px] max-lg:w-[750px] max-md:w-full max-md:px-8">
                    <FormInput label='Title' placeholder='Enter a title' />
                    <div id="title-error" aria-live="polite" aria-atomic="true">
                        {state?.errors?.title &&
                            state?.errors?.title.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                    <FormInput label='Location' placeholder='Enter a location' />
                    <div id="location-error" aria-live="polite" aria-atomic="true">
                        {state?.errors?.location &&
                            state?.errors.location.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                    <FormInput label='Price' placeholder='Enter a price in USD' />
                    {state?.errors?.price &&
                        state?.errors.price.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                        ))}
                    <FormInput label='Bedrooms' placeholder='Enter the number of bedrooms' />
                    {state?.errors?.bedrooms &&
                        state?.errors.bedrooms.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                        ))}
                    <FormInput label='Beds' placeholder='Enter the number of beds' />
                    {state?.errors?.beds &&
                        state?.errors.beds.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                        ))}
                    <FormInput label='Bathrooms' placeholder='Enter the number of bathrooms' />
                    {state?.errors?.bathrooms &&
                        state?.errors.bathrooms.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                        ))}
                    <FormInput label='Description' placeholder='Enter a description' />
                    {state?.errors?.description &&
                        state?.errors.description.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                        ))}
                    <FormInput label='Check_In' placeholder='Enter the check-in date in yyyy-mm-dd format' />
                    {state?.errors?.check_in &&
                        state?.errors?.check_in.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                        ))}
                    <FormInput label='Check_Out' placeholder='Enter the check-out date in yyyy-mm-dd format' />
                    {state?.errors?.check_out &&
                        state?.errors.check_out.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                        ))}
                    {/* <FormInput label='Images' placeholder='Enter Image URL' /> */}
                    {[...Array(imgCount)].map((e, i) => (
                        <FormInputList
                            key={i}
                            index={i}
                            count={imgCount}
                            label='Images'
                            placeholder='Enter an image URL'
                            onIncrementImg={handleIncrementImgCount}
                        />

                    ))}
                    {state?.errors?.images &&
                        state?.errors.images.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                        ))}
                    {/* <FormInput label='Amenities' placeholder='Enter amenity' /> */}

                    {[...Array(amtCount)].map((e, i) => (
                        <FormInputList
                            key={i}
                            index={i}
                            count={amtCount}
                            label='Amenities'
                            placeholder='Enter an amenity'
                            onIncrementAmt={handleIncrementAmtCount}
                        />
                    ))}
                    {state?.errors?.amenities &&
                        state?.errors.amenities.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                        ))}

                    <div id="create-error" aria-live="polite" aria-atomic="true">
                        {state?.message &&

                            <p className="mt-2 text-sm text-red-500" key={state?.message}>
                                {state?.message}
                            </p>
                        }
                    </div>

                    <div className='mt-10 w-full flex justify-center'>
                        <button
                            className='px-8 py-4 bg-green text-white text-xl rounded-xl'
                            type='submit'
                        >Create</button>

                    </div>
                </div>
            </form>
        </main>
    )
}

export default Page
