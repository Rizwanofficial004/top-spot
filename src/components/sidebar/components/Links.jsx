/* eslint-disable */
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DashIcon from "components/icons/DashIcon";
// chakra imports

export function SidebarLinks(props) {
  // Chakra color mode
  let location = useLocation();

  const { routes } = props;
  const [openMenus, setOpenMenus] = useState({
    users: true,
    attandance: true,
    task: true,
    workOrder: true,
    leave: true,
    rolesAndPermissions: true,
  });

  const toggleMenu = (menuName) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  const createLinks = (routes) => {
    return routes.map((route, index) => {
      if (route.children) {
        return (
          <div key={index}>
            {/* Parent Menu with toggle */}
            <div
              className="relative mb-3 flex hover:cursor-pointer"
              onClick={() => toggleMenu(route.manu)}
            >
              <li className="my-[3px] flex cursor-pointer items-center px-8">
                <span
                  className={`${
                    activeRoute(route.path)
                      ? "font-bold text-brand-500 dark:text-white"
                      : "font-medium text-gray-600"
                  }`}
                >
                  {route.icon ? route.icon : ""}{" "}
                  {/* {route.icon ? route.icon : <DashIcon />}{" "} */}
                </span>
                <p
                  className={`leading-1 ml-4 flex ${
                    activeRoute(route.path)
                      ? "font-bold text-navy-700 dark:text-white"
                      : "font-medium text-gray-600"
                  }`}
                >
                  {route.component === null ? (
                    <div>{route.name}</div>
                  ) : (
                    <Link key={index} to={route.path}>
                      {route.name}
                    </Link>
                  )}
                </p>
              </li>

              {/* Toggle arrow or icon */}
              {/* <span className="ml-auto">
                {openMenus[route.name] ? "▼" : "▶"}
              </span> */}
            </div>

            {/* Submenu Links (collapsible) */}
            {openMenus[route.manu] && (
              <ul className="ml-8">{createLinks(route.children)}</ul>
            )}
          </div>
        );
      }

      // if (route.layout === "/admin" || route.layout === "/auth" || route.layout === "/users") {
      return (
        route.visible && (
          <Link key={index} to={route.path}>
            <div className="relative mb-3 flex hover:cursor-pointer">
              <li
                className="my-[3px] flex cursor-pointer items-center px-8"
                key={index}
              >
                <span
                  className={`${
                    activeRoute(route.path)
                      ? "font-bold text-brand-500 dark:text-white"
                      : "font-medium text-gray-600"
                  }`}
                >
                  {route.icon ? route.icon : ""}{" "}
                  {/* {route.icon ? route.icon : <DashIcon />}{" "} */}
                </span>
                <p
                  className={`leading-1 ml-4 flex ${
                    activeRoute(route.path)
                      ? "font-bold text-navy-700 dark:text-white"
                      : "font-medium text-gray-600"
                  }`}
                >
                  {route.name}
                </p>
              </li>
              {activeRoute(route.path) ? (
                <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
              ) : null}
            </div>
          </Link>
        )
      );
      // }
    });
  };
  // BRAND
  return createLinks(routes);
}

export default SidebarLinks;
