import { GlobeAltIcon } from '@heroicons/react/24/outline';

import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
    return (
        <div
            className={`${lusitana.className} flex flex-row items-center leading-none max-lg:absolute max-lg:top-6`}
        >
            <GlobeAltIcon className="text-green h-12 w-12 rotate-[15deg] " />
            <p className="text-[44px] text-green font-black">Acme</p>
        </div>
    );
}
