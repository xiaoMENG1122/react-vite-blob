/* eslint-disable react-refresh/only-export-components */
import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import Home from "../views/Home";

// const Test1 = lazy(() => import("../views/Test11.jsx"));
// const Test2 = lazy(() => import("../views/Test22.jsx"));
// const Test3 = lazy(() => import("../views/Test33.jsx"));
const Login = lazy(() => import("../views/Login.jsx"));
const HomeList = lazy(() => import("../views/HomeList/index"));
const withLoading = (comp) => (
  <React.Suspense fallback={<div>Loading</div>}>{comp}</React.Suspense>
);
const routes = [
  {
    path: "/",
    element: <Navigate to="/homelist" />,
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/homelist",
        element: withLoading(<HomeList />),
      },
    ],
    // children: [
    //   {
    //     path: "/test1",
    //     element: withLoading(<Test1 />),
    //   },
    //   {
    //     path: "/test2",
    //     element: withLoading(<Test2 />),
    //   },
    //   {
    //     path: "/test3/test303",
    //     element: withLoading(<Test3 />),
    //   },
    // ],
  },
  { path: "/login", element: <Login /> },
  {
    path: "*",
    element: <Navigate to="/homelist" />,
  },
];
export default routes;
