import Image from 'next/image'
import React from 'react'
import { ChevronDownIcon, HomeIcon, StarIcon } from '@heroicons/react/solid'
import { BeakerIcon } from '@heroicons/react/outline'

function Header() {
    return (
        <div className='sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm'>
            <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
                <Image
                    objectFit='contain'
                    src="https://links.papareact.com/fqy"
                    alt=''
                    layout='fill' />
            </div>
            <div className='flex items-center mx-7 xl:min-w-[300px]'>
                <HomeIcon className='h-5 w-5' />
                <p className='ml-2 hidden flex-1 lg:inline'>Home</p>
                <ChevronDownIcon className='h-5 w-5' />
            </div>
        </div>
    )
}

export default Header