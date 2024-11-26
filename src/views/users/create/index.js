import InputField from '../../../components/fields/InputField'
import React from 'react'

const CreateUser = () => {
  return (
    <div className='grid grid-cols-2 gap-8 mx-40'>
      <InputField
        variant="auth"
        extra="mb-3"
        label="First Name*"
        placeholder="Enter First Name"
        id="firstName"
        type="text"
      />
      <InputField
        variant="auth"
        extra="mb-3"
        label="Last Name*"
        placeholder="Enter Last Name"
        id="lastName"
        type="text"
      />
      <InputField
        variant="auth"
        extra="mb-3"
        label="Email*"
        placeholder="mail@simmmple.com"
        id="email"
        type="text"
      />
      <InputField
        variant="auth"
        extra="mb-3"
        label="Password*"
        placeholder="Enter Password"
        id="password"
        type="text"
      />
      <InputField
        variant="auth"
        extra="mb-3"
        label="Type*"
        placeholder="Enter Type"
        id="type"
        type="text"
      />
      <InputField
        variant="auth"
        extra="mb-3"
        label="Active*"
        placeholder=""
        id="active"
        type="text"
      />
      <InputField
        variant="auth"
        extra="mb-3"
        label="Employ ID*"
        placeholder="Enter Employ ID"
        id="type"
        type="text"
      />
      <button className="linear h-12 mt-8 w-full rounded-xl bg-brand-500 py-[0px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
        Sign In
      </button>
    </div>
  )
}

export default CreateUser