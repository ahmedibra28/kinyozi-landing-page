import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <nav className='bg-white border-gray-200 text-gray-500'>
      <div className='flex max-w-6xl mx-auto p-3 border border-t-0 border-l-0 border-r-0'>
        <Link href={'/'} className='flex items-center space-x-3 mx-auto h-20'>
          <Image
            width={400}
            height={400}
            src='/logo.png'
            quality={100}
            className='h-52 w-full'
            alt='Kinyozi Logo'
          />
        </Link>
      </div>
    </nav>
  )
}
