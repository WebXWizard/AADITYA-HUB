"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Link from "next/link";

const ManageUser = () => {
  const fetchUserList = () => {
    axios
      .get("http://localhost:5000/contact/getall")
      .then((res) => {
        console.log(res.status);
        console.log(res.data);
        setUserList(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to fetch User List");
      });
  };
  useEffect(() => {
    fetchUserList();
  }, []);

  const deleteUser = (id) => {
    axios
      .delete("http://localhost:5000/contact/delete/" + id)
      .then((result) => {
        toast.success("User Deleted Successfully");
        fetchUserList();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to Delete User");
      });
  };

  const [userList, setUserList] = useState([]);

  return (
    <div className="bg-gray-200 rounded-xl font-[sans-serif]">
      <div className=" lg:max-w-[100%] mx-auto  ">
        <div className="border rounded-xl shadow-lg p-8 bg-cyan-200 ml-4 ">
          <h1 className="text-center font-bold text-4xl font-[sans-serif]">
            Manage Query
          </h1>
          {/* <hr/> */}

          <table className="w-full mt-4 mb-2 font-sans rounded-lg">
            <thead className="bg-rose-300 rounded-xl text-white font-[sans-serif]">
              <tr>
                <th className="p-2 border border-white">ID</th>
                <th className="p-2 border border-white">NAME</th>
                <th className="p-2 border border-white">EMAIL</th>
                <th className="p-2 border border-white">PHONE</th>
                <th colSpan={2}>QUERY</th>
              </tr>
            </thead>

            <tbody className="bg-fuchsia-200 font-[sans-serif]">
              {userList.map((user) => {
                return (
                  <tr key={user._id}>
                    <td className="p-2 border via-violet-300">{user._id} </td>
                    <td className="p-2 border via-violet-300">{user.name} </td>
                    <td className="p-2 border via-violet-300">{user.email} </td>
                    <td className="p-2 border via-violet-300">{user.phone} </td>
                    <td className="p-2 border via-violet-300">
                      {user.details}
                    </td>
                    <td
                      onClick={() => deleteUser(user._id)}
                      className="p-2 border via-violet-300"
                    >
                      <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                        Delete
                      </button>
                    </td>
                   
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
