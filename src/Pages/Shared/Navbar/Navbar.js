import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link>Item 1</Link>
            </li>
            <li tabIndex={0}>
              <Link className="justify-between">Parent</Link>
            </li>
            <li>
              <Link>Item 3</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <img
            src="https://i.ibb.co/s52drGr/image-removebg-preview.png"
            alt=""
            className="w-8"
          />
          <Link to={"/"} className="ml-2 normal-case font-semibold text-xl">
            Shop BD
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link>Item 1</Link>
          </li>
          <li tabIndex={0}>
            <Link>Parent</Link>
          </li>
          <li>
            <Link>Item 3</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <img
          alt=""
          className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
          src="https://source.unsplash.com/40x40/?portrait?1"
        />
      </div>
    </div>
  );
};

export default Navbar;
