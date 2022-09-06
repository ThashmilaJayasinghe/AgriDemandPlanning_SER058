import React, { useState } from "react";
import { useEffect } from "react";
import {
  CalendarIcon,
  LocationMarkerIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import MyRequestsWrapper from "../../components/wrappers/farmer/MyRequestsWrapper";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const positions = [
  {
    id: 1,
    title: "Back End Developer",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    closeDate: "2020-01-07",
    closeDateFull: "January 7, 2020",
  },
  {
    id: 2,
    title: "Front End Developer",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    closeDate: "2020-01-07",
    closeDateFull: "January 7, 2020",
  },
  {
    id: 3,
    title: "User Interface Designer",
    type: "Full-time",
    location: "Remote",
    department: "Design",
    closeDate: "2020-01-14",
    closeDateFull: "January 14, 2020",
  },
];

const staticRequests = [
  {
    id: "1462e85c-0cc9-4038-9f00-5aec06ea5880",
    category: "Rice",
    type: "Kalu Heenati",
    Hectares: 1.41,
    createdAt: "2021-07-05",
  },
  {
    id: "b4abcf90-55f3-4df9-bb1a-2f457042102b",
    category: "Rice",
    type: "Keeri Samba",
    Hectares: 3.0,
    createdAt: "2021-07-25",
  },
  {
    id: "d2c2d091-04e4-4e8d-9c3e-690bac268dfe",
    category: "Rice",
    type: "Kalu Heenati",
    Hectares: 0.7,
    createdAt: "2021-07-04",
  },
];

const SeedRequestList = () => {
  const [myRequests, setMyRequests] = useState(staticRequests);
  const [searchQuery, setSearchQuery] = useState("");

  const onDelete = (requestId) => {
    console.log("onDelete - ", requestId);
  };

  const onUpdate = (requestId) => {
    console.log("On update - ", requestId);
  };

  return (
    <div>
      <MyRequestsWrapper>
        <div className="font-semibold text-2xl text-center my-16">
          {" "}
          My Requests{" "}
        </div>

        <div className="">
          <input
            type="text"
            name="searchRequests"
            id="searchRequests"
            autoComplete="given-name"
            className="mt-2 pl-4 p-1 focus:ring-1 min-w-max w-full focus:ring-emerald-400 focus:border-emerald-400 block  shadow-sm sm:text-sm text-gray-600 border-gray-300 rounded-3xl"
            onChange={(event) => {
              setSearchQuery(event.target.value);
            }}
            placeholder= 'Search . . .'
          />
        </div>

        {myRequests.map((request) => (
          <div
            key={request.id}
            className="bg-emerald-100 shadow overflow-hidden sm:rounded-md my-4"
          >
            <div className="block">
              <div className="px-4 py-4 sm:px-6">
                <div className="mt-2 grid grid-cols-5">
                  <p className="flex col-span-1 items-center text-sm text-gray-500">
                    Category
                  </p>
                  <p className="mt-2 col-span-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    : {request.category}
                  </p>
                </div>
                <div className="mt-2 grid grid-cols-5 ">
                  <p className="flex col-span-1 items-center text-sm text-gray-500 ">
                    Type
                  </p>
                  <p className="mt-2 col-span-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    : {request.type}
                  </p>
                </div>
                <div className="mt-2 grid grid-cols-5">
                  <p className="flex col-span-1 items-center text-sm text-gray-500">
                    Hectares
                  </p>
                  <p className="mt-2 col-span-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    : {request.Hectares}
                  </p>
                </div>
                <div className="mt-2 grid grid-cols-5">
                  <p className="flex col-span-1 items-center text-sm text-gray-500">
                    Added date
                  </p>
                  <p className="md:mt-0 col-span-2 flex items-center text-sm text-gray-500">
                    : {request.createdAt}
                  </p>
                </div>
                <div className="grid grid-cols-5 ">
                  <div className="col-start-4 col-span-1 justify-end flex">
                    <button
                      className="flex min-w-fit bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 transition-colors"
                      onClick={() => onDelete(request.id)}
                    >
                      <RiDeleteBin6Line
                        className="mt-0 mr-0 md:mt-1 md:mr-1"
                        size={18}
                      />
                      <p className="hidden md:block">Delete</p>
                    </button>
                  </div>
                  <div className="col-span-1 justify-center flex">
                    <button
                      className="flex w-fit text-white bg-green-500 py-1 px-4 rounded-lg hover:bg-green-600 transition-colors"
                      onClick={() => onUpdate(request.id)}
                    >
                      <AiOutlineEdit
                        className="mt-0 mr-0 md:mt-1 md:mr-1"
                        size={18}
                      />
                      <p className="hidden md:block"> Update</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </MyRequestsWrapper>
    </div>
  );
};

export default SeedRequestList;
