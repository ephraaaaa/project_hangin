import React from 'react'
import GaugeComponent from './GaugeComponent'

function DisplayComponent() {
    return (
        <div className='bg-white h-4/6 w-full flex flex-col rounded-xl shadow-lg p-4 m-3'>

            {/* GAUGE AND LOCATION */}

            <div className='flex-1 flex m-1'>
                <div className='flex flex-col m-2'>
                    <div className='flex-1'></div>
                    <div className='flex-1 flex flex-col justify-end'>
                        <div className='bg-orange-500 text-white text-center rounded-full font-bold'>
                            Medium
                        </div> 
                    </div>
                    <div className='flex-1 flex flex-col'>
                        <div className='flex-1 font-bold text-3xl text-wrap'>Arteche Blvd.</div>
                        <div className='text-sm'>Catbalogan City, Samar - 6700</div>
                    </div>
                </div>
                <div className='flex-1 flex justify-center items-center rounded-lg'>
                    <GaugeComponent value={75}/>
                </div>
            </div>

            {/* PARTICULATE MATTER */}

            <div className='flex-1 rounded-lg flex flex-col p-2'>

                <div className='text-lg font-black'>
                    PARTICULATE MATTER
                </div>
               
                <div className='flex-1 flex font-bold'>

                    {/* PM 1.0 */}

                    <div className='flex-1 shadow-lg bg-white rounded-xl m-1 flex flex-col justify-center items-center p-2'>
                        <div className='flex-1 flex justify-center items-center text-7xl'>25</div>
                        <div className='bg-black rounded-full text-white text-center text-sm w-full'> μg/m³ (PM 1.0)</div>
                    </div>

                     {/* PM 2.5 */} 

                    <div className='flex-1 shadow-lg bg-white rounded-xl m-1 flex flex-col justify-center items-center p-2'>
                        <div className='flex-1 flex justify-center items-center text-7xl'>25</div>
                        <div className='bg-black rounded-full text-white text-center text-sm w-full'> μg/m³ (PM 1.0)</div>
                    </div>

                     {/* PM 10.0 */}

                    <div className='flex-1 shadow-lg bg-white rounded-xl m-1 flex flex-col justify-center items-center p-2'>
                        <div className='flex-1 flex justify-center items-center text-7xl'>25</div>
                        <div className='bg-black rounded-full text-white text-center text-sm w-full'> μg/m³ (PM 1.0)</div>
                    </div>
                </div>
            </div>

            {/* DUST */}

             <div className='flex-1 rounded-lg flex flex-col p-3'>

                <div className='text-lg font-black'>
                    DUST CONCENTRATION
                </div>
               
                <div className='bg-white shadow-lg rounded-lg flex-1'>
                        
                </div>
            </div>

        </div>
    )
}

export default DisplayComponent