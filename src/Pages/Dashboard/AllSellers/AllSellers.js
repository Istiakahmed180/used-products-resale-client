import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllSellers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users`);
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make Admin Successfully");
          refetch();
        }
      });
  };

  const handleUserDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("User Deleted Successfully");
          refetch();
        }
      });
  };

  return (
    <div>
      <h1 className="text-center font-semibold text-2xl mb-10">All Users</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>status</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) =>
                user?.role === "seller" ? (
                  <>
                    <tr key={user._id}>
                      <th>{""}</th>
                      <td>{user?.names}</td>
                      <td>{user?.email}</td>
                      <td>{user?.role}</td>
                      <td>
                        <button
                          onClick={() => handleUserDelete(user._id)}
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
                    </tr>
                  </>
                ) : (
                  ""
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllSellers;
