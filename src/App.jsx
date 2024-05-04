import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Menu from "./Components/Menu";

function App() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
}
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <SignUp /> },
      { path: "/signIn", element: <SignIn /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes}></RouterProvider>
);
