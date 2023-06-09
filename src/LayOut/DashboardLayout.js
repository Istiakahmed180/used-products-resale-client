import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [isByer, setIsByer] = useState(false);
  useEffect(() => {
    fetch(
      `https://used-products-resale-server-sigma.vercel.app/users/admin/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data.isAdmin);
      });
  }, [user?.email]);

  useEffect(() => {
    fetch(
      `https://used-products-resale-server-sigma.vercel.app/users/seller/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setIsSeller(data.isSeller);
      });
  }, [user?.email]);
  useEffect(() => {
    fetch(
      `https://used-products-resale-server-sigma.vercel.app/users/byer/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setIsByer(data.isByer);
      });
  }, [user?.email]);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <aside className="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60">
              <div className="flex flex-col justify-between h-full">
                <div className="flex-grow">
                  <div className="px-4 py-6 text-center border-b">
                    <h1 className="text-xl font-bold leading-none">
                      <span className="text-yellow-700">Task Manager</span> App
                    </h1>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-1">
                      <li>
                        <Link
                          to="/dashboard/mybooking"
                          className="flex items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            className="text-lg mr-4"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                          </svg>
                          My Orders
                        </Link>
                      </li>
                      {isByer && (
                        <li>
                          <Link
                            to="/dashboard/mybooking"
                            className="flex items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              className="text-lg mr-4"
                              viewBox="0 0 16 16"
                            >
                              <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                            </svg>
                            My Orders
                          </Link>
                        </li>
                      )}
                      {isAdmin && (
                        <>
                          <li>
                            <Link
                              to="/dashboard/allusers"
                              className="flex items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                className="text-lg mr-4"
                                viewBox="0 0 16 16"
                              >
                                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                              </svg>
                              All Users
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/dashboard/allsellers"
                              className="flex items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                className="text-lg mr-4"
                                viewBox="0 0 16 16"
                              >
                                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                              </svg>
                              All Sellers
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/dashboard/allbyers"
                              className="flex items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                className="text-lg mr-4"
                                viewBox="0 0 16 16"
                              >
                                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                              </svg>
                              All Byers
                            </Link>
                          </li>
                        </>
                      )}
                      {isSeller && (
                        <>
                          <li>
                            <Link
                              to="/dashboard/addproduct"
                              className="flex items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                className="text-lg mr-4"
                                viewBox="0 0 16 16"
                              >
                                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                              </svg>
                              Add A Products
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/dashboard/myproducts"
                              className="flex items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                className="text-lg mr-4"
                                viewBox="0 0 16 16"
                              >
                                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                              </svg>
                              My Products
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/dashboard/mybooking"
                              className="flex items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                className="text-lg mr-4"
                                viewBox="0 0 16 16"
                              >
                                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                              </svg>
                              My Byers
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
                <div className="p-4">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      className=""
                      viewBox="0 0 16 16"
                    >
                      <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                  </button>{" "}
                  <span className="font-bold text-sm ml-2">Logout</span>
                </div>
              </div>
            </aside>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
