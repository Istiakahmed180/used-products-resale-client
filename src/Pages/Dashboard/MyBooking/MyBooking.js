import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const MyBooking = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h1 className="text-center text-2xl font-semibold mb-10">My Booking</h1>
      <div>
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg w-full">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="p-4"></th>
                <th scope="col" class="py-3 px-6">
                  Name
                </th>
                <th scope="col" class="py-3 px-6">
                  Product
                </th>
                <th scope="col" class="py-3 px-6">
                  Phone
                </th>
                <th scope="col" class="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, i) => (
                <>
                  <tr
                    key={booking._id}
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td class="p-4 w-4">
                      <div class="flex items-center">{i + 1}</div>
                    </td>
                    <th
                      scope="row"
                      class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        class="w-10 h-10 rounded-full"
                        src="/docs/images/people/profile-picture-1.jpg"
                        alt=""
                      />
                      <div class="pl-3">
                        <div class="text-base font-semibold">
                          {booking.userName}
                        </div>
                        <div class="font-normal text-gray-500">
                          {booking.userEmail}
                        </div>
                      </div>
                    </th>
                    <td class="py-4 px-6">
                      {booking.productName} <br />
                      price:
                      <span className="text-orange-500 font-semibold">
                        ${booking.productPrice}
                      </span>
                    </td>
                    <td class="py-4 px-6">
                      <div class="flex items-center">
                        <div class=""></div> {booking.userPhone} <br /> Meeting:{" "}
                        {booking.meetingLocation}
                      </div>
                    </td>
                    <td class="py-4 px-6">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit user
                      </a>
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
