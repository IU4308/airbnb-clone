import { list } from '@/app/lib/placeholder';
import Image from 'next/image';
import React from 'react'

async function page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id
    const item = list.find((item) => item.id === Number(id))
    const { images } = { ...item }

    return (
        <div className='flex flex-col items-center gap-4 py-8 px-6'>
            {images!.map(image => (

                <Image
                    key={image}
                    className='object-contain'
                    src={image}
                    alt='image1-1'
                    width={1024}
                    height={1024}
                />

            ))}

        </div>
    )
}

export default page
