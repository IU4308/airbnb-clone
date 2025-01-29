import Link from 'next/link'
import React from 'react'

function DropDown() {
    return (
        <>
            <ul className='absolute drop-shadow-2xl w-[200] right-16 top-[70] max-xl:right-2 max-xl:top-[70] z-30 bg-white p-4 flex flex-col gap-2'>
                <li className='p-2 hover:bg-gray-200 active:bg-gray-100'>
                    <Link href='/' className='block'>
                        Home
                    </Link>
                </li>
                <li className='p-2 hover:bg-gray-200 active:bg-gray-100'>
                    <Link href='/wishlist' className='block'>
                        Wishlist
                    </Link>
                </li>
                <li className='p-2 hover:bg-gray-200 active:bg-gray-100'>Lend your house</li>

            </ul>
        </>
    )
}

export default DropDown
