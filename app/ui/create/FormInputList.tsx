import { PlusIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx';


function FormInputList({
    label,
    placeholder,
    errors,
    index,
    count,
    onIncrementImg,
    onIncrementAmt,
}: {
    label: string;
    placeholder: string;
    errors: string[] | undefined;
    index?: number;
    count?: number;
    onIncrementImg?: () => void;
    onIncrementAmt?: () => void;
}) {
    const handleIncrementImg = onIncrementImg?.bind(null)
    const handleIncrementAmt = onIncrementAmt?.bind(null)
    return (
        <div className={clsx("py-6",
            { 'border-b-2': index === count! - 1 }
        )}>
            <div className='flex max-md:flex-col justify-between gap-10 max-md:gap-4 items-center max-md:items-start'>
                <label htmlFor={label.toLowerCase()} className='text-xl flex-shrink-0 flex-grow-0'>{index === 0 ? label : ''}</label>
                <div className='w-[80%] relative max-md:w-full'>
                    <input id={label.toLowerCase()} type="text" name={`${label.toLowerCase()}${index}`} placeholder={placeholder} className='border border-gray-400 rounded-xl px-4 py-2 w-full' />
                    {(label === 'Images' || label === 'Amenities') &&
                        <PlusIcon
                            className={index === count! - 1 ? 'w-6 h-6 absolute -left-8 max-md:-left-6 top-[9px] cursor-pointer hover:bg-gray-300' : 'hidden'}

                            onClick={
                                label === 'Images' ? handleIncrementImg : handleIncrementAmt
                            }
                        />
                    }
                    <div id="title-error" aria-live="polite" aria-atomic="true">
                        {errors &&
                            errors?.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormInputList
