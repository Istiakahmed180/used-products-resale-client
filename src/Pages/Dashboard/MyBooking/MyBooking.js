import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Spinner from "../../../Components/Spinner/Spinner";
import { AuthContext } from "../../../Context/AuthProvider";

const MyBooking = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [], refetch } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleBookingDelete = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Booking Product Deleted Successfully");
          refetch();
        }
      });
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-semibold mb-10">My Booking</h1>
      <div>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4"></th>
                <th scope="col" className="py-3 px-6">
                  Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Product
                </th>
                <th scope="col" className="py-3 px-6">
                  Phone
                </th>
                <th scope="col" className="py-3 px-6">
                  Delete
                </th>
                <th scope="col" className="py-3 px-6">
                  Pay
                </th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, i) => (
                <>
                  <tr
                    key={booking._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="p-4 w-4">
                      <div className="flex items-center">{i + 1}</div>
                    </td>
                    <th
                      scope="row"
                      className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        className="w-10 h-10 rounded-full"
                        src={booking.productPicture}
                        alt=""
                      />
                      <div className="pl-3">
                        <div className="text-base font-semibold">
                          {booking.userName}
                        </div>
                        <div className="font-normal text-gray-500">
                          {booking.userEmail}
                        </div>
                      </div>
                    </th>
                    <td className="py-4 px-6">
                      {booking.productName} <br />
                      price:
                      <span className="text-orange-500 font-semibold">
                        ${booking.productPrice}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <div className=""></div> {booking.userPhone} <br />{" "}
                        Meeting: {booking.meetingLocation}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <button
                        onClick={() => handleBookingDelete(booking._id)}
                        className="btn btn-square btn-outline"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </td>
                    <td className="">
                      <Link to={`/dashboard/payment/${booking._id}`}>
                        <button className="btn btn-sm btn-accent">Pay</button>
                      </Link>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
