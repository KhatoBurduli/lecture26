import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const UsersLayouts: React.FC = () => {
  return (
<>
<nav>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        <Link to={"/contact"}>Contact</Link>
      </li>

      <li>
        <NavLink to={"/users"}>Users</NavLink>
      </li>
    </nav>
    
    <div>
      <Outlet context={{message: 'Hello'}} />
    </div>
    </>
  );
};

export default UsersLayouts;
