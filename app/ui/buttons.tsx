import clsx from 'clsx';


export function AddDate({
    type,
    date,
    classname
}: {
    type: 'Check-In' | 'Check-Out',
    date: string,
    classname?: string
}) {
    return (
        <button className={clsx('w-1/2 flex flex-col items-start p-4', classname)}>
            <p className='font-bold uppercase'>{type}</p>
            <p>{date}</p>
        </button>
    )
}