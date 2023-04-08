import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {RxSketchLogo, RxDashboard, RxPerson} from 'react-icons/rx'
import {HiOutlineBell, HiCog} from 'react-icons/hi'
import logoVM from '../public/logoVMDark.png'

export default function Sidebar({children}) {
  return (
    <div className='flex' >
        <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between' >
            <div className='flex flex-col items-center' >
                <Link href={'/'} >
                    <div className=" text-white p-3 rounded-lg inline-block" >
                        <Image src={logoVM}alt='logo-vitalmove' width={20} height={20} />
                        {/* <RxSketchLogo size={20} /> */}
                    </div>
                </Link>
                <span className='border-b-[1px] border-gray-200 w-full p-2 mb-5' > </span>
                <Link href={'/'}  >
                    <div className="bg-gray-100 hover:bg-gray-200 text-dark p-3 rounded-lg inline-block" >
                        <RxDashboard size={20} />
                    </div>
                </Link>
                <Link href={'/customers'} >
                    <div className="bg-purple-100 text-dark p-3 rounded-lg inline-block" >
                        <RxPerson size={20} />
                    </div>
                </Link>
                <Link href={'/orders'} >
                    <div className="bg-purple-200 hover:bg-gray-200 text-dark p-3 rounded-lg inline-block" >
                        <HiOutlineBell size={20} />
                    </div>
                </Link>
                <Link href={'/'} >
                    <div className="bg-purple-200 hover:bg-gray-200 text-dark p-3 rounded-lg inline-block" >
                        <HiCog size={20} />
                    </div>
                </Link>

            </div>

        </div>
       
        <main className='ml-20 w-full' > {children} </main>
    </div>
  )
}
