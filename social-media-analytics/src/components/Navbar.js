import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex gap-6">
      <NavLink
        to="/"
        className={({ isActive }) => isActive ? "font-bold border-b-2 border-white" : ""}
      >
        Feed
      </NavLink>
      <NavLink
        to="/top-users"
        className={({ isActive }) => isActive ? "font-bold border-b-2 border-white" : ""}
      >
        Top Users
      </NavLink>
      <NavLink
        to="/trending-posts"
        className={({ isActive }) => isActive ? "font-bold border-b-2 border-white" : ""}
      >
        Trending Posts
      </NavLink>
    </nav>
  );
};

export default Navbar;
