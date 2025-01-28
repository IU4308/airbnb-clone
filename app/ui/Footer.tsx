'use client';

import { FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import clsx from "clsx";
import { usePathname } from "next/navigation";

function Footer() {
    const pathname = usePathname()
    const today = new Date();
    return (
        <footer className={clsx('w-full   bg-gray-200  text-center py-2 px-8 ',
            { 'relative max-md:pb-24': pathname.startsWith('/rooms') },
            { 'absolute -bottom-16': !pathname.startsWith('/rooms') },
        )}>
            <div className='flex justify-around max-sm:flex-col '>
                <p>
                    &copy; {today.getFullYear()} Ilya Usov
                </p>
                <div className="flex items-center gap-2 max-sm:justify-around max-xs:flex-col">
                    <div className="flex gap-2">
                        <FaGithub className='w-6 h-6' />
                        <span>IU4308</span>

                    </div>
                    <div className="flex gap-2">
                        <MdAlternateEmail className='w-6 h-6' />
                        <span>ilya671qw@gmail.com</span>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
