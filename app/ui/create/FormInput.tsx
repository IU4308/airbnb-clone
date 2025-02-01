
function FormInput({
    label,
    placeholder,
    errors
}: {
    label: string;
    placeholder: string;
    errors: string[] | undefined;
}) {
    return (
        <div className=" border-b-2 py-6">
            <div className='flex max-md:flex-col justify-between gap-10 max-md:gap-4 items-center max-md:items-start'>
                <label htmlFor={label.toLowerCase()} className='text-xl flex-shrink-0 flex-grow-0'>{label}</label>
                <div className='w-[80%] relative max-md:w-full'>
                    <input id={label.toLowerCase()} type="text" name={label.toLowerCase()} placeholder={placeholder} className='border border-gray-400 rounded-xl px-4 py-2 w-full' />
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

export default FormInput
