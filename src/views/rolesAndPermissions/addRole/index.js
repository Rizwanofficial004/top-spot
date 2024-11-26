import InputField from "components/fields/InputField";
import React from "react";

const AddRole = () => {
  return (
    <div className="mx-96">
      <InputField
        variant="auth"
        extra="mb-3"
        label="Role Name*"
        placeholder="Add Role Name"
        id="name"
        type="text"
      />

      <button className="linear mt-8 h-12 w-full rounded-xl bg-brand-500 py-[0px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
        Add Role
      </button>
    </div>
  );
};

export default AddRole;
