import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <img
            src="https://i.ibb.co/s52drGr/image-removebg-preview.png"
            alt=""
            className="w-10"
          />
          <Link className="font-semibold ml-2 normal-case text-xl">
            Tech Land
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link>Item 1</Link>
            </li>
            <li>
              <Link>Parent</Link>
            </li>
            <li>
              <Link>Item 3</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
