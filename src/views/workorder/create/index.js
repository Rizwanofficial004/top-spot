import InputField from 'components/fields/InputField'
import React from 'react'

const Create = () => {
  return (
    <div className='mx-96'>
    <InputField
        variant="auth"
        extra="mb-3"
        label="To Do*"
        placeholder="visit johar town"
        id="visit johar town"
        type="text"
      />
       <InputField
        variant="auth"
        extra="mb-3"
        label="Due Date*"
        placeholder="10-10-2024"
        id="10-10-2024"
        type="date"
      />
      <h1 className='mb-2'>Assigned to</h1>
      <select className="mb-3 flex items-center justify-center text-sm font-normal h-12  p-3 w-full rounded-lg me-2 hover:cursor-pointer dark:!bg-navy-800 dark:text-white">
        <option value="monthly">Rizwan</option>
        <option value="yearly">Ali</option>
        <option value="weekly">Hassan</option>
        <option value="weekly">Hassan</option>
        <option value="weekly">umari</option>
        <option value="weekly">Hassan</option>
        <option value="weekly">safdar</option>
      </select>

      <button className="linear h-12 mt-8 w-full rounded-xl bg-brand-500 py-[0px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
        Create Work Order
      </button>
    </div>
  )
}

export default Create