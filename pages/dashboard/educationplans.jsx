import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { useGetPlannerMutation } from '@/features/plannerAPI'
import { reloadValueState } from '@/features/reloadSlice';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export default function educationplans() {

  const [plans] = useGetPlannerMutation();
  const [plansData, setPlansData] = useState([])

  const reloaded = useSelector(reloadValueState)

  async function loadingData(){

    plans().then((res)=>{
      if (res.data){
        setPlansData(res.data)
      }
      console.log(res)
    }).catch((error)=>{
      console.log(error)
    })

  }

  useEffect(() => {
    loadingData()
  }, [reloaded])
  



  return (
    <Sidebar>
      <main className='bg-gray-200 min-h-screen min-w-screen' >
        <Header />
        <div className='p-4'>
          <div className='w-full min-h-screen bg-white rounded-lg p-5'>
            <div className=' bg-gray-100 p-3 rounded-lg my-2' >

              <h2>Grado</h2>
            </div>
            {
              plansData && plansData.map((item)=>{
                return(
                  <div className=' bg-gray-100 p-5 rounded-lg  ' >

                    <div className='flex gap-2' >
                    <p>{item.GRADE}° </p>
                    <p>{item.LEVEL == "basico" ? "Básico" : item.LEVEL  == "medio" ? "Medio" : null } </p>
                    </div>
                  </div>
                )
              })
            }
          <h2>Education Plans</h2>
          </div>
          
        </div>
      </main>
    </Sidebar>
    
  )
}
