import React from 'react'
import { rolesAndPermissionsListingColumn, rolesAndPermissionsListingData } from '../../tables/variables/columnsData'
import RolesAndPermissionsTable from '../../tables/components/RolesAndPermissionsTable'


const RolesAndPermissionsListing = () => {
  return (
    <>
      <div className=' w-full h-full'> 
        <RolesAndPermissionsTable
          columnsData={rolesAndPermissionsListingColumn}
          tableData={rolesAndPermissionsListingData}
        />
      </div>
    </>
  )
}

export default RolesAndPermissionsListing