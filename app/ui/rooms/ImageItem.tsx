import Image from 'next/image'
import clsx from 'clsx'

function ImageItem({ image, classname }: { image: string, classname?: string }) {
    return (
        <>
            <Image
                className={clsx('w-full h-full object-cover ', classname)}
                src={image} width={1024} height={1024} alt={image} />

        </>
    )
}

export default ImageItem
