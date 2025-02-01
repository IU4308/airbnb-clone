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
    path: string;
    isInWishlist: boolean;
    title: string;
    image: string;
    id: number
}) {
    const handleDeleteFromWishlist = deleteFromWishlist.bind(null, id, path)
    const handleAddToWishlist = addToWishlist.bind(null, title, image, id, path)
    return (
        <button
            className='flex gap-2'
            onClick={
                isInWishlist
                    ? handleDeleteFromWishlist
                    : handleAddToWishlist
            }
        >
            {isInWishlist
                ? <HeartIconSolid className={clsx('text-red-500', classname)} />
                : <HeartIcon className={classname} />}
            {path?.startsWith('/rooms') &&
                <span>Save{isInWishlist ? 'd' : ''}</span>
            }

        </button>
    )
}

export default AddToWishlist
