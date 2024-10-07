import React from "react";
import { createBrowserRouter, createRoutesFromElements, Link, NavLink, Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Users, { loader } from "./pages/Users";
import User from "./pages/User";
import SpecialUser from "./pages/SpecialUser";
import Error from "./pages/Error";
import UsersLayouts from "./layouts/UsersLayouts";
import FormPage, { action } from "./pages/FormPage";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />

    <Route path="/users" element={<UsersLayouts/>}>
      <Route index element={<Users />} loader={loader}/>
      <Route path="special" element={<SpecialUser />} />
      <Route path=":id" element={<User />} />
    </Route>

    <Route path="/form-page" element={<FormPage />} action={action}/>
    <Route path="*" element={<Error />} />
  </Route>
  )
)

const App: React.FC = () => {
  return <RouterProvider router={routes} />
}; 

export default App;
