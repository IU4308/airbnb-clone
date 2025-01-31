'use client';

import clsx from 'clsx';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';


export function AddDate({
    type,
    date,
    classname
}: {
    type: 'Check-In' | 'Check-Out',
    date: string,
    classname?: string
}) {
    return (
        <button className={clsx('w-1/2 flex flex-col items-start hover:cursor-not-allowed p-4', classname)}>
            <p className='font-bold uppercase'>{type}</p>
            <p>{date}</p>
        </button>
    )
}

// export function ShowMoreBtn() {
//     const [countClick, setCountClick] = useState(0)
//     const searchParams = useSearchParams();
//     const pathname = usePathname();
//     const { replace } = useRouter();

//     const handleLimit = (countClick: number) => {
//         const params = new URLSearchParams(searchParams)
//         // console.log('hello')
//         setCountClick(c => c + 1)

//         params.set('limit', `${16 + 16 * countClick}`)
//         // console.log(params)

//         replace(`${pathname}?${params.toString()}`)
//     }

//     const onClick = handleLimit.bind(null, countClick)

//     return (
//         <div>
//             <button
//                 className='bg-green text-white hover:opacity-90 active:opacity-60 rounded-xl px-8 py-4 mt-6 mb-12'
//                 onClick={onClick}
//             >
//                 Show more
//             </button>
//         </div>
//     )
// }