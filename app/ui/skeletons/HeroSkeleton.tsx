import HeroItemSkeleton from "./HeroItemSkeleton"


function HeroSkeleton() {

    const rents = [...Array(16)].map((e, i) => (
        i
    ))
    return (
        <div className='flex flex-col items-center w-full'>
            <ul className='max-w-8xl w-full gap-y-14 p-6 grid grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 max-xl:grid-cols-3 max-md:grid-cols-2 max-xs:grid-cols-1 max-lg:gap-2 gap-6 max-lg:gap-y-10 items-center self-center' >
                {rents.map((rent) => (
                    <li key={rent} className=' h-[400px] bg-gray-100 border '>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default HeroSkeleton
