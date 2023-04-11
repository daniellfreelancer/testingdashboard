import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import React from 'react'

export default function createplans() {
  return (
    <Sidebar>
            <main className='bg-gray-200 min-h-screen min-w-screen' >
                <Header />
                <div className='p-4'>
                    <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto' >
                        <h2>Crear Planes</h2>
                    </div>
                </div>
            </main>
    </Sidebar>
  )
}
