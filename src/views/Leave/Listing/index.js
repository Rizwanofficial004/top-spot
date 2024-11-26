import React from 'react'
import { balanceSummaryColumn, balanceSummaryData } from '../../tables/variables/columnsData'
import BalanceSummaryTable from '../../../views/tables/components/BalanceSummaryTable'


const LeavesListing = () => {
  return (
    <>
      <div className=' w-full h-full'> 
        <BalanceSummaryTable
          columnsData={balanceSummaryColumn}
          tableData={balanceSummaryData}
        />
      </div>
    </>
  )
}

export default LeavesListing