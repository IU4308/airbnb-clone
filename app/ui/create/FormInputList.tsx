import { PlusIcon } from '@heroicons/react/24/outline'


function FormInputList({
    label,
    placeholder,
    index,
    count,
    onIncrementImg,
    onIncrementAmt,
}: {
    label: string;
    placeholder: string;
    index?: number;
    count?: number;
    onIncrementImg?: () => void;
    onIncrementAmt?: () => void;
}) {
    const handleIncrementImg = onIncrementImg?.bind(null)
    const handleIncrementAmt = onIncrementAmt?.bind(null)
    return (
        <div className='flex max-md:flex-col justify-between gap-10 max-md:gap-4 items-center max-md:items-start'>
            <label htmlFor={label.toLowerCase()} className='text-xl flex-shrink-0 flex-grow-0'>{index === 0 ? label : ''}</label>
            <div className='w-[80%] relative max-md:w-full'>
                <input id={label.toLowerCase()} type="text" name={`${label.toLowerCase()}${index}`} placeholder={placeholder} className='border border-gray-400 rounded-xl px-4 py-2 w-full' />
                {(label === 'Images' || label === 'Amenities') &&
                    <PlusIcon
                        className={index === count! - 1 ? 'w-6 h-6 absolute -left-8 max-md:-left-6 top-[9px] cursor-pointer hover:bg-gray-300' : 'hidden'}
                        // onClick={() => {
                        //     (label === 'Images' || label === '') ? onIncrementImg!() : onIncrementAmt!()
                        // }} 
                        onClick={
                            label === 'Images' ? handleIncrementImg : handleIncrementAmt
                        }
                    />
                }
            </div>
        </div>
    )
}

export default FormInputList
