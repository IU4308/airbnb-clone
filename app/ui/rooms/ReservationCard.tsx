import React from 'react'
import { AddDate } from '../buttons'
import { formateDate } from '@/app/lib/utils';

function ReservationCard({
    price,
    check_in,
    check_out
}: {
    price: number;
    check_in: string;
    check_out: string;
}) {
    const check_in_date = formateDate(check_in)
    const check_out_date = formateDate(check_out)
    return (
        <div className='w-[40%] max-md:fixed max-md:z-40 max-md:bottom-0 max-md:left-0 max-md:bg-white max-md:w-full border border-gray-200 drop-shadow flex flex-col max-md:flex-row max-md:items-center justify-center max-md:justify-between rounded-xl max-md:rounded-none p-10 max-md:py-2 max-md:px-4 gap-6 max-md:gap-0'>
            <div className='flex max-md:flex-col gap-2'>
                <p className='flex gap-2 items-center'>
                    <span className='font-bold text-2xl max-md:text-[1rem]'>{price} $</span>
                    <span className='max-md:text-[1rem]'>night</span>
                </p>
                <button className='md:hidden cursor-buttonointer bg-gray-200 rounded-2xl p-1'>
                    {check_in_date.month} {check_in_date.day} - {check_in_date.month === check_out_date.month ? '' : `${check_out_date.month} `}{check_out_date.day}
                </button>
            </div>
            <div className="flex border border-gray-500 rounded-2xl max-md:hidden">
                <AddDate type='Check-In' date={check_in} classname='border-r border-gray-500' />
                <AddDate type='Check-Out' date={check_out} />
            </div>
            <div className='bg-green rounded-xl text-white text-2xl max-md:text-[1rem] flex justify-center items-center py-4 max-md:py-2 px-8'>
                Reserve
            </div>
            <div className="flex justify-center font-bold text-xl max-md:hidden">
                <span>Total:</span>&nbsp;
                <span>600 $</span>
            </div>
        </div>
    )
}

export default ReservationCard
