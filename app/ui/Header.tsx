'use client';

import AcmeLogo from '@/app/ui/acme-logo';
import { UserCircleIcon, Bars3Icon } from '@heroicons/react/24/outline';
import Search from './Search';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import DropDown from './wishlist/DropDown';

function Header() {
    const pathname = usePathname()
    // console.log(pathname, pathname.startsWith('/rooms'))
    const [isActive, setIsActive] = useState<boolean>(false)

    useEffect(() => {
        setIsActive(false)
    }, [pathname])
    return (
        <header className={clsx('relative z-20 bg-white border-b-2 p-6 shadow-black drop-bottom-shadow w-full flex justify-between items-center max-lg:items-start flex-wrap mx-auto',
            {
                'sticky top-0': pathname === '/'
            },
            { 'max-w-7xl': pathname.startsWith('/rooms') },
            { 'max-w-8xl': !pathname.startsWith('/rooms') },

        )}>
            <Link className='z-30' href='/'>
                <AcmeLogo />
            </Link>
            <div className={clsx("relative  max-lg:w-full flex lg:justify-around max-lg:flex-row-reverse flex-wrap-reverse max-lg:justyfy-end max-lg:gap-4",
                { 'w-[80%]': pathname === '/' }
            )}>
                {pathname === '/' && (
                    <Search />
                )}
                <div className='flex items-center space-x-4 cursor-pointer'>
                    <Link href='/create' className='block max-md:hidden'>
                        Lend your house
                    </Link>
                    {/* <span className='max-md:hidden'>Lend your house</span> */}
                    <div
                        onClick={() => setIsActive(!isActive)}
                        className="border flex drop-shadow-md shadow-black rounded-full p-2 space-x-2">
                        <Bars3Icon className="h-8 w-8 max-xs:hidden" />
                        <UserCircleIcon className="h-8 w-8" />
                    </div>
                </div>
                {isActive && (
                    <DropDown />
                )}
            </div>
        </header>
    )
}

export default Header
