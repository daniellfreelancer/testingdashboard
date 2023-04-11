import Barchart from '@/components/Barchart'
import Header from '@/components/Header'
import Login from '@/components/Login'
import RecentOrders from '@/components/RecentOrders'
import Topcards from '@/components/Topcards'
import Head from 'next/head'
import Image from 'next/image'
import { Router } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Head>
        <title>VitalMove Dashboard</title>
        <meta name="description" content="VitalMove Panel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.png" />
      </Head>
      <main className='bg-gray-100 min-h-screen' >
        <Login/>
      </main>
    </>
  )
}
