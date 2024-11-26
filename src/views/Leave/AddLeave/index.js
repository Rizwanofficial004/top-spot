import InputField from "components/fields/InputField";
import React from "react";

const AddLeave = () => {
  return (
    <div className="mx-96">
      <InputField
        variant="auth"
        extra="mb-3"
        label="Casual Leaves*"
        placeholder="Casual Leaves"
        id="casual-leaves"
        type="number"
      />

      <InputField
        variant="auth"
        extra="mb-3"
        label="Anual Leaves*"
        placeholder="Anual Leaves"
        id="anual-leaves"
        type="number"
      />

      <InputField
        variant="auth"
        extra="mb-3"
        label="Sick Leaves*"
        placeholder="Sick Leaves"
        id="sick-leaves"
        type="number"
      />

      <button className="linear mt-8 h-12 w-full rounded-xl bg-brand-500 py-[0px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
        Add
      </button>
    </div>
  );
};

export default AddLeave;
