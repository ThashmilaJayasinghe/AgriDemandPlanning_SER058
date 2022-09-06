import React, { useState } from "react";
import { useEffect } from "react";
import {
  CalendarIcon,
  LocationMarkerIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import MyRequestsWrapper from "../../components/wrappers/farmer/MyRequestsWrapper";

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

  return (
    <div>
      <MyRequestsWrapper>
        <div className="font-semibold text-2xl text-center my-16">
          {" "}
          My Requests{" "}
        </div>

        {myRequests.map((request) => (
          <div
            key={request.id}
            className="bg-white shadow overflow-hidden sm:rounded-md my-4"
          >
            <div className="block hover:bg-gray-50 ">
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
              </div>
            </div>
          </div>
        ))}
      </MyRequestsWrapper>
    </div>
  );
};

export default SeedRequestList;
