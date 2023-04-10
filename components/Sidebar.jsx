import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {RxSketchLogo, RxDashboard, RxPerson} from 'react-icons/rx'
import {HiOutlineBell, HiCog} from 'react-icons/hi'
import logoVM from '../public/logoVMDark.png'
import { FaShoppingBag } from 'react-icons/fa'
import {GrPlan} from 'react-icons/gr'
import {MdOutlineCreateNewFolder} from 'react-icons/md'
export default function Sidebar({children}) {
  return (
    <div className='flex justify-between' >
        <div className='fixed sm:w-[15%] md:w-[20rem] h-screen p-4 bg-white border-r-[1px] flex flex-col items-center justify-start ' >
            <div className='flex flex-col items-center' >
                <Link href={'/dashboard'} >
                    <div className=" text-white p-3 rounded-lg inline-block" >
                        <Image src={logoVM}alt='logo-vitalmove' width={20} height={20} />
                        {/* <RxSketchLogo size={20} /> */}
                    </div>
                </Link>
                <span className='border-b-[1px] border-gray-200 w-full p-2 mb-5 ' > </span>
                <Link href={'/dashboard'}  >
                    <div className="bg-purple-200 hover:bg-gray-200 text-dark p-3 mb-3 rounded-lg  flex gap-5 w-[15rem] " >
                        <RxDashboard size={20} />
                        <h2>Stats</h2> 
                    </div>
                </Link>
                <Link href={'/dashboard/customers'} >
                    <div className="bg-purple-200 hover:bg-gray-200 text-dark p-3 mb-3 rounded-lg  flex gap-5 w-[15rem] " >
                        <RxPerson size={20} />
                        <h2>Usuarios</h2> 
                    </div>
                </Link>
                <Link href={'/dashboard/orders'} >
                    <div className="bg-purple-200 hover:bg-gray-200 text-dark p-3 mb-3 rounded-lg flex gap-5 w-[15rem]" >
                        <HiOutlineBell size={20} />
                        <h2>Ordenes</h2> 
                    </div>
                </Link>
                <Link href={'/dashboard/educationplans'} >
                    <div className="bg-purple-200 hover:bg-gray-200 text-dark p-3  mb-3 rounded-lg flex gap-5 w-[15rem]" >
                        <HiCog size={20} />
                        <h2>Vm Class</h2> 
                    </div>
                </Link>
                <Link href={'/dashboard/educationplans'} >
                    <div className="bg-purple-200 hover:bg-gray-200 text-dark p-3 mb-3 rounded-lg  flex gap-5 w-[15rem]" >
                        <GrPlan size={20} />
                        <h2>Planificación Educativa</h2> 
                    </div>
                </Link>
                <Link href={'/dashboard/createplans'} >
                    <div className="bg-purple-200 hover:bg-gray-200 text-dark p-3 mb-3 rounded-lg  flex gap-5 w-[15rem] " >
                        <MdOutlineCreateNewFolder size={20} />
                        <h2>Crear Planificación</h2> 
                    </div>
                </Link>

            </div>

        </div>
       
        <main className=' ml-[20rem] w-full min-w-screen' > {children} </main>
    </div>
  )
}
