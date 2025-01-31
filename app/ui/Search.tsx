'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { MagnifyingGlassCircleIcon } from '@heroicons/react/16/solid'

function Search() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`)
    }, 500)
    return (
        <div className='w-[60%] max-w-5xl relative  max-lg:w-full'>
            {/* max-lg:absolute max-lg:top-[80] max-lg:w-full */}
            <input
                className="w-[100%] p-4 border border-gray-300 rounded-full drop-shadow shadow-black"
                type="text"
                placeholder='Search for a location'
                onChange={(e) => {
                    handleSearch(e.target.value)
                }}
                defaultValue={searchParams.get('query')?.toString()}
            />

            <MagnifyingGlassCircleIcon className='absolute z-10 w-12 right-2 top-1 text-green' />
        </div>
    )
}

export default Search
