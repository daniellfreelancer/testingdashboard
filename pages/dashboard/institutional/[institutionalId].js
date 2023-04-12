import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
import { reloadValueState } from '@/features/reloadSlice';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function institutionalDetail() {

    const reloaded = useSelector(reloadValueState)
    const [usersData, setUsersData] = useState([])
    const router = useRouter();
    const id = router.query.institutionalId

    const {institutionalId} = useParams()

    institutionalId ? console.log(institutionalId) : console.log("no encuentra ID")

    

    



    async function getDataById(){
        const response = await axios.get(`https://whale-app-qsx89.ondigitalocean.app/insti/find/${institutionalId}`).then((res) => {
            console.log(res)
        }).catch((error) => {
            console.log(error)
        })
    }


    useEffect(() => {
       

        getDataById()

    }, [reloaded])
    



  return (
    <Sidebar>
    <main className='bg-gray-200 min-h-screen min-w-screen' >
        <Header />
        <div className='p-4'>
            <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto' >
                <h2>Detalle de instituciones</h2>
                <h2> {'https://whale-app-qsx89.ondigitalocean.app/insti/find/' + router.query.institutionalId} </h2>
            </div>
        </div>
    </main>
</Sidebar>
  )
}
