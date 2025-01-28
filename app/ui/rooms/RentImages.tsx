import React from 'react'
import ImageItem from './ImageItem'
import { PhotoIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import clsx from 'clsx';

function RentImages({
    id,
    images
}: {
    id: string;
    images: string[];
}) {
    const imageCount = images!.length
    return (
        <div className='relative'>
            <ul className='grid grid-cols-3 gap-4 max-md:grid-cols-1'>
                {images.map((image, index) => {
                    if (index <= 2) {
                        return (
                            <li
                                key={image}
                                className={clsx(
                                    { 'max-md:h-[40vw]': index === 0 },
                                    { 'max-md:hidden': index !== 0 },
                                )}
                            >
                                <ImageItem image={image} />
                            </li>
                        )
                    }
                }
                )}

                {imageCount === 1 &&
                    <>
                        <li key='image-non1' className='max-md:hidden'>
                            <ImageItem image='/image-non.jpg' />
                        </li>
                        <li key='image-non2' className='max-md:hidden'>
                            <ImageItem image='/image-non.jpg' />
                        </li>
                    </>
                }
                {imageCount === 2 &&
                    <li key='image-non1' className='max-md:hidden'>
                        <ImageItem image='/image-non.jpg' />
                    </li>
                }

                {/* <li className=''>
                    <ImageItem image={'/image1-1.jpg'} classname={'max-md:h-[40vw]'} />
                </li>
                <li className='max-md:hidden'>
                    <ImageItem image={'/image1-2.jpg'} />
                </li>
                <li className='max-md:hidden'>
                    <ImageItem image={'/image1-3.jpg'} />
                </li> */}
            </ul>
            <Link href={`/gallery/${id}`}>
                <div className="bg-white flex gap-2 absolute rounded-xl bottom-8 right-4 px-4 py-2">
                    <PhotoIcon className="w-6 h-6" />
                    <span> Show All Photos</span>
                </div>
            </Link>
        </div>
    )
}

export default RentImages
