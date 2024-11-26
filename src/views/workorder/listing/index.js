import React from 'react'
import ColumnsTable from 'views/tables/components/ColumnsTable'
import { workOrderListingColumn } from '../../../views/tables/variables/columnsData'
import {  WorkOrderListingData } from '../../../views/tables/variables/columnsData'
import WorkOrderTable from '../../../views/tables/components/WorkOrderTable'


const WorkOrderListing = () => {
  return (
    <>
     <div className=' w-full h-full'> 
    <WorkOrderTable
      columnsData={workOrderListingColumn}
      tableData={WorkOrderListingData}
    />
  </div>
    
    </>
  )
}

export default WorkOrderListing