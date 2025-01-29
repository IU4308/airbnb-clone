import { MagnifyingGlassCircleIcon } from '@heroicons/react/16/solid'

function Search() {
    return (
        <div className='w-[60%] max-w-1000 relative  max-lg:w-full'>
            {/* max-lg:absolute max-lg:top-[80] max-lg:w-full */}
            <input
                className="w-[100%] p-4 border border-gray-300 rounded-full drop-shadow shadow-black"
                type="text"
                placeholder='Search for an apartment' />
            <MagnifyingGlassCircleIcon className='absolute z-10 w-12 right-2 top-1 text-green' />
        </div>
    )
}

export default Search
