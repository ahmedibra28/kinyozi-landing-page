import Image from 'next/image'
import { FaAppStore, FaGooglePlay } from 'react-icons/fa6'

export default function Home() {
  return (
    <div className='max-w-6xl mx-auto p-3 flex flex-col md:flex-row gap-y-10 md:justify-between items-center h-screen'>
      <div className='space-y-10 w-full md:w-[48%] mx-auto  md:-mt-20 duration-1000'>
        <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-primary duration-1000 text-center md:text-start'>
          Book Your Next Haircut with Ease
        </h1>
        <p className='text-center md:text-start text-gray-700'>
          Discover the easiest way to book your next haircut. <br />
          <strong>Kinyozi App </strong>
          streamlines the process, connecting you with top barbershops for
          personalized grooming experiences. <br />
          Say goodbye to long waits and missed appointments. <br />
          Download now and experience the future of seamless barber bookings.
        </p>

        <div className='flex gap-x-3 justify-center md:justify-start'>
          <button className='bg-gray-700 border-2 border-gray-300 p-4 w-60 text-white rounded-2xl shadow-md flex items-center text-start gap-x-2 hover:scale-105 duration-700'>
            <FaAppStore className='text-3xl' />
            <span>
              <span>Download on the</span> <br />
              <span className='font-bold text-lg'>App Store</span>
            </span>
          </button>

          <a
            href='https://play.google.com/store/apps/details?id=com.kinyozi.app'
            target='_blank'
            className='bg-gray-700 border-2 border-gray-300 p-4 w-60 text-white rounded-2xl shadow-md flex items-center text-start gap-x-2 hover:scale-105 duration-700'
          >
            <FaGooglePlay className='text-3xl' />
            <span>
              <span>Get in on</span> <br />
              <span className='font-bold text-lg'>Google Play</span>
            </span>
          </a>
        </div>
      </div>

      <div className=' w-full md:w-[48%] mx-auto  md:-mt-20 duration-1000'>
        <Image
          src='/mockup.svg'
          width={1000}
          height={1000}
          quality={100}
          alt='kinyozi app'
          className='mx-auto w-[80%] lg:w-full duration-1000'
        />
      </div>
    </div>
  )
}
