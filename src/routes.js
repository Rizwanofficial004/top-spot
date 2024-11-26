import React from "react";

import { BiLogIn } from "react-icons/bi";
import { MdOutlineTask } from "react-icons/md";
import { IoCodeWorkingSharp } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa6";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "./views/admin/tables";

// Auth Imports
import SignIn from "./views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";
import Punch from "./views/attandance/punch";
import MapView from "views/attandance/mapView";
import CreateUser from "./views/users/create";
import UserList from "./views/users/List";
import WorkOrderListing from "./views/workorder/listing";
import Create from "./views/workorder/create";
import RolesAndPermissionsListing from "./views/rolesAndPermissions/listing";
import AddRole from "./views/rolesAndPermissions/addRole";
import AddPermissions from "./views/rolesAndPermissions/addPermissions";
import BalanceSummary from "./views/Leave/BalanceSummary";
import AddLeave from "./views/Leave/AddLeave";
import TaskListing from "./views/task/listing";
import TaskDetail from "./views/task/detail";
import WorkOrderDetail from "views/workorder/detail";

const routes = [
  {
    name: "Dashboard",
    manu: "dashboard",
    path: "/",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
    visible: true,
  },
  {
    name: "Users", // Parent item for users
    manu: "users",
    layout: "/users",
    path: "/user",
    icon: <MdPerson className="h-6 w-6" />,
    component: null, // Parent doesn't need a cent
    visible: true,
    children: [
      {
        name: "Create",
        path: "user/create",
        component: <CreateUser />,
        visible: true,
      },
      {
        name: "Listing",
        path: "user/listing",
        component: <UserList />,
        visible: true,
      },
    ],
  },
  {
    name: "Attandance", // Parent item for users
    manu: "attandance",
    layout: "/users",
    path: "/attandance",
    icon: <BiLogIn className="h-6 w-6" />,
    component: null, // Parent doesn't need a component
    visible: true,
    children: [
      {
        name: "Punch",
        path: "attandance/punch",
        component: <Punch />,
        visible: true,
      },
      {
        name: "Records",
        path: "attandance/records",
        component: <Punch />,
        visible: true,
      },
      {
        name: "Map View",
        path: "attandance/map-view",
        component: <MapView />,
        visible: true,
      },
    ],
  },
  {
    name: "Task", // Parent item for users
    manu: "task",
    layout: "/users",
    path: "/task",
    component: null,
    icon: <MdOutlineTask className="h-6 w-6" />,
    children: [
      {
        name: "Listing",
        layout: "/users",
        path: "task/listing",
        component: <TaskListing />,
        visible: true,
      },
      {
        name: "Create",
        layout: "/users",
        path: "/task/create",
        component: <Punch />,
        visible: true,
      },
      {
        name: "Detail",
        layout: "/detail",
        path: "/task/Detail",
        component: <TaskDetail />,
        visible: true,
      },
    ],
  },
  {
    name: "WorkOrder", // Parent item for users
    manu: "workOrder",
    layout: "/users",
    path: "/work-order",
    component: null,
    icon: <IoCodeWorkingSharp className="h-6 w-6" />,
    children: [
      {
        name: "Listing",
        layout: "/users",
        path: "work-order/listing",
        component: <WorkOrderListing />,
        visible: true,
      },
      {
        name: "Create",
        layout: "/users",
        path: "work-order/create",
        component: <Create />,
        visible: true,
      },
      {
        name: "Detail",
        layout: "/users",
        path: "work-order/detail",
        component: <WorkOrderDetail />,
        visible: true,
      },
    ],
  },
  {
    name: "Leave", // Parent item for users
    manu: "leave",
    layout: "/users",
    path: "/leave",
    component: null,
    icon: <IoCodeWorkingSharp className="h-6 w-6" />,
    children: [
      {
        name: "Add",
        layout: "/users",
        path: "leave/add",
        component: <AddLeave />,
        visible: true,
      },
      {
        name: "Balance Summary",
        layout: "/users",
        path: "leave/balance-summary",
        component: <BalanceSummary />,
        visible: true,
      },
    ],
  },
  {
    name: "Roles & Permissions",
    manu: "rolesAndPermissions",
    layout: "/users",
    path: "/roles-and-permissions",
    component: null,
    icon: <IoCodeWorkingSharp className="h-6 w-6" />,
    children: [
      {
        name: "Listing",
        layout: "/users",
        path: "roles-and-permissions/listing",
        component: <RolesAndPermissionsListing />,
        visible: true,
      },
      {
        name: "Add Role",
        layout: "/users",
        path: "roles-and-permissions/add-role",
        component: <AddRole />,
        visible: true,
      },
      {
        name: "Add Permissions",
        layout: "/users",
        path: "roles-and-permissions/add-permissions",
        component: <AddPermissions />,
        visible: true,
      },
      {
        name: "Edit Permissions",
        layout: "/users",
        path: "roles-and-permissions/edit-permissions/:id",
        component: <AddPermissions />,
        visible: false,
      },
    ],
  },
  {
    name: "FAQ's",
    manu: "faq",
    layout: "/users",
    path: "/faq",
    icon: <FaQuestion className="h-6 w-6" />,
    component: <Punch />,
    visible: true,
  },
  // {
  //   name: "NFT Marketplace",
  //   path: "/nft-marketplace",
  //   icon: <MdOutlineShoppingCart className="h-6 w-6" />,
  //   component: <NFTMarketplace />,
  // visible: true,
  //   secondary: true,
  // },
  // {
  //   name: "Data Tables",
  //   icon: <MdBarChart className="h-6 w-6" />,
  //   path: "data-tables",
  //   component: <DataTables />,
  // visible: true,
  // },
  // {
  //   name: "Profile",
  //   path: "profile",
  //   icon: <MdPerson className="h-6 w-6" />,
  //   component: <Profile />,
  // visible: true,
  // },
  // {
  //   name: "Sign In",
  //   layout: "/auth",
  //   path: "sign-in",
  //   icon: <MdLock className="h-6 w-6" />,
  //   component: <SignIn />,
  // visible: true,
  // },
];
export default routes;
