import{j as e,a as o,d as r}from"./app-b5aa86aa.js";import i from"./Dashboard-443c4fcb.js";import"./styled-b9d77b2a.js";import"./TextField-664c4644.js";import"./createSvgIcon-d8412e8d.js";import"./Typography-d150a934.js";import"./AuthenticatedLayout-5923d014.js";import"./transition-8d05ab92.js";function g({auth:t,jobs:s,laravelVersion:a,phpVersion:d}){return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Welcome"}),e.jsx("div",{className:"relative sm:flex sm:justify-center sm:items-center  bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white",children:e.jsx("div",{className:"sm:fixed sm:top-0 sm:right-0 p-6 text-end",children:t.user?e.jsx(r,{href:route("dashboard"),className:"font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",children:"Dashboard"}):e.jsxs("div",{className:"mr-60",children:[e.jsx(r,{href:route("login"),className:"font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",children:"Log in"}),e.jsx(r,{href:route("register"),className:"ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",children:"Register"})]})})}),e.jsx(i,{jobs:s,auth:t})]})}export{g as default};