'use client';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/16/solid';
import clsx from 'clsx';
import { addToWishlist, deleteFromWishlist } from '../lib/action';

function AddToWishlist({
    classname,
    path,
    isInWishlist,
    title,
    image,
    id
}: {
    classname: string;
    path?: string;
    isInWishlist: boolean;
    title: string;
    image: string;
    id: number
}) {
    // console.log(isInWishlist)
    return (
        <button
            className='flex gap-2'
            onClick={() => {
                isInWishlist
                    ? deleteFromWishlist(id)
                    : addToWishlist(title, image, id)
            }}
        // isInWishlist
        //     ? () => {
        //         deleteFromWishlist(id)
        //     }
        //     : () => {
        //         addToWishlist(title, image, id)
        //     }

        >
            {/* <> */}
            {isInWishlist
                ? <HeartIconSolid className={clsx('text-red-500', classname)} />
                : <HeartIcon className={classname} />}
            {path &&
                <span>Save{isInWishlist ? 'd' : ''}</span>
            }

            {/* </> */}
        </button>
    )
}

export default AddToWishlist
