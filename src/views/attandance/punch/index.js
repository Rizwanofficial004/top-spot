import React, { useState } from 'react'
// import CheckTable from 'views/admin/default/components/CheckTable'
import ColumnsTable from "../../tables/components/ColumnsTable.jsx";
import tableDataColumns from '../../tables/variables/tableDataColumns.json';
import { columnsDataDevelopment, userListingColumn, userListingData } from "../../tables/variables/columnsData";
import Card from '../../../components/card';
import Switch from 'components/switch/index.jsx';
import MiniCalendar from '../../../components/calendar/MiniCalendar.jsx';

const Punch = () => {
  const [punchVal, setPunchVal] = useState('Punch In')

  const handlePunchVal = (val) => {
    if(val === "Punch In") {
      setPunchVal("Punch Out")
    } else {
      setPunchVal("Punch In")
    }
  }
  return (
    <>
      <div className=' w-full h-80'> 
        <ColumnsTable
          columnsData={userListingColumn}
          tableData={userListingData}
        />
      </div>
      {/* <Switch /> */}

      <div className='grid grid-cols-2 gap-5 mt-5'>
        <Card extra={"w-full pb-10 p-4 h-full min-h-52"}>
          <div className='ml-5 mt-5 '>
            <h1 className='text-[14px] font-poppins font-semibold'>Punch In Clock</h1>
            <h2 className='text-[10px] font-poppins font-normal mt-2'> Click the button below to punch in</h2>
          </div>
          <div className='flex justify-between'>
            <div className='ml-5 mt-5 '>
              <h1>00:00:00</h1>
            </div>
            <div className='mr-5 mt-5 '>
              <button onClick={()=> handlePunchVal(punchVal)} className="linear h-8 w-full p-2 rounded-md bg-brand-500 py-[0px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                {punchVal}
              </button>
              {/* <h1 className='flex justify-center text-[14px] my-3'>or</h1>
              <button className="linear h-8 w-full p-2 rounded-md bg-brand-500 py-[0px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                Punch Out
              </button> */}
              {/* <button className='flex items-center text-[14px] gap-1 font-poppins font-normal pt-1 pb-1 pl-2 pr-2 mt-2'>Get location</button> */}
            </div>
          </div>

          <div className='flex justify-between mt-8 mr-5'>
            <button className='border-2 border-black pl-2 pr-6 '>121:34211:42</button>
            <button className="linear h-8  p-2 rounded-md bg-brand-500 py-[0px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
              Get Location
            </button>
          </div>
          
        </Card>
        
        {/* <div className='border border-black h-52'> */}
        <Card extra={"w-full pb-10 p-4 h-full min-h-52"}>
          <h1>Leave Application Potal Sooner</h1>
        </Card>

        {/* </div> */}
      </div>
      <Card extra={"w-full my-5 pb-10 p-4 h-full min-h-52 justify-center"}>
      <div className='w-full mt-5 flex justify-between items-center px-20'>
        <div className='flex flex-col justify-center items-center'>
          <h1>Total weeek hours</h1>
          <h1 className='mt-16'>00:00:00</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1>Remaining Leaves</h1>
          <h2 className='mt-16'>1</h2>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1>Leaves</h1>
          <h2 className='mt-16'>1</h2>
        </div>
      </div>
      </Card>
      <div className='w-full bg-white mt-5 h-52 border-2 border-black flex justify-center items-center '>
        calendar view detail
        {/* <div className="grid grid-cols-1 rounded-[20px]">
          <MiniCalendar />
        </div> */}
</div>
    </>
  )
}

export default Punch