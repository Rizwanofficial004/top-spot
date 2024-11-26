import React, { Fragment } from "react";
import { Checkbox, Select } from "antd";
import InputField from "components/fields/InputField";
import { useLocation, useParams } from "react-router-dom";
const onChange = (checkedValues) => {
  console.log("checked = ", checkedValues);
};
const options = [
  {
    label: "Create",
    value: "create",
    disabled: false,
  },
  {
    label: "List",
    value: "list",
  },
  {
    label: "Edit",
    value: "edit",
  },
  {
    label: "Delete",
    value: "delete",
  },
];

const modules = [
  { name: "dashboard", title: "Dashboard" },
  { name: "users", title: "Users" },
  { name: "attandance", title: "Attandance" },
  { name: "task", title: "Task" },
  { name: "workOrder", title: "WorkOrder" },
  { name: "rolesAndPermissions", title: "Roles and Permissions" },
];

const EditPermissions = () => {
  const {id} = useParams();

  return (
    <div className="p-10">
      <Select
        className="mb-4 w-[270px]"
        //   style={{width: 270}}
        showSearch
        placeholder="Select a Role"
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        options={[
          {
            value: "1",
            label: "admin",
          },
          {
            value: "2",
            label: "user",
          },
          {
            value: "3",
            label: "super admin",
          },
        ]}
      />

      {modules.map((item) => (
        <Fragment>
          <div className="mb-2 text-xl font-normal">{item.title}</div>
          <Checkbox.Group
            options={options}
            // defaultValue={["Delete"]}
            onChange={onChange}
          />
          <br />
          <br />
        </Fragment>
      ))}

      <button className="linear mt-8 h-12 w-[270px] rounded-xl bg-brand-500 py-[0px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
        Add Permissions
      </button>
    </div>
  );
};

export default EditPermissions;
