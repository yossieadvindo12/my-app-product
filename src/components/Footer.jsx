import React from 'react'
import { footer } from '../assets'

const Footer = () => {
    return (
        <div className='relative overflow-hidden'>

            <div className='flex  h-96 py-16 px-16 justify-between space-x-16 absolute'>

                <div className='flex flex-col  space-y-5'>
                    <p className='text-lg'>Tagline</p>
                    <p className="text-sm text-ellipsis text-[12px]">Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581</p>
                </div>
                <div className='flex flex-col w-full h-full space-y-4 z-50'>
                    <div className='w-full h-full flex space-x-2'>
                        <div className="flex flex-col w-full h-full space-y-5">
                            <p className='text-lg font-bold'>Program</p>
                            <p className="text-sm text-[12px]">Online Course</p>
                            <p className="text-sm text-[12px]">Mini Bootcamp</p>
                            <p className="text-sm text-[12px]">Bootcamp</p>
                        </div>
                        <div className="flex flex-col w-full h-full space-y-5">
                            <p className='text-lg font-bold'>Bidang Ilmu</p>
                            <p className="text-sm text-[12px]">Digital marketing</p>
                            <p className="text-sm text-[12px]">Product management</p>
                            <p className="text-sm text-[12px]">English</p>
                            <p className="text-sm text-[12px]">Programing</p>
                        </div>
                        <div className="flex flex-col w-full h-full space-y-5">
                            <p className='text-lg font-bold'>Tentang Edspert</p>
                            <p className="text-sm text-[12px]">Bantuan</p>
                            <p className="text-sm text-[12px]">Tentang Kami</p>
                            <p className="text-sm text-[12px]">Media Social</p>
                        </div>
                    </div>
                    <p className='text-sm font-bold'>Tingkatkan skill dan pengetahuan bersama para mentor terbaik di bidangnya, untuk siapkan karir impian anda.</p>
                </div>
            </div>
                <img className=" ml-auto" src={footer} alt="img" />
        </div>
    )
}

export default Footer