import { fetchRents } from '../lib/data'
import HeroItem from './HeroItem'

async function Hero() {
    const rents = await fetchRents()
    return (
        <div className='flex justify-center'>
            <ul className='max-w-8xl gap-y-14 p-6 grid grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 max-xl:grid-cols-3 max-md:grid-cols-2 max-xs:grid-cols-1 max-lg:gap-2 gap-6 max-lg:gap-y-10 items-start self-start'>
                {rents!.map((rent) => (
                    <li key={rent.rent_id} className='hover:bg-[#e5e7eb] '>
                        <HeroItem rent={rent} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Hero
