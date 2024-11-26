import React from 'react'
import ColumnsTable from '../../tables/components/ColumnsTable'
import { columnsDataColumns, userListingColumn, userListingData } from '../../tables/variables/columnsData'

const UserList = () => {
  return (
    <div className=' w-full h-full'> 
    <ColumnsTable
      columnsData={userListingColumn}
      tableData={userListingData}
    />
  </div>
  )
}

export default UserList