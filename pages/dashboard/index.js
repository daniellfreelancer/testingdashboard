import Barchart from '@/components/Barchart'
import Header from '@/components/Header'
import RecentOrders from '@/components/RecentOrders'
import Sidebar from '@/components/Sidebar'
import Topcards from '@/components/Topcards'
import React from 'react'

export default function Dashboard() {
  return (
    <Sidebar>
         <main className='bg-gray-200 min-h-screen min-w-screen' >
        <Header/>
        <Topcards/>
       <div className='p-4 grid md:grid-cols-3 gap-4'>
        <Barchart/>
        <RecentOrders/>
        </div> 

      </main>
  </Sidebar>
  )
}
