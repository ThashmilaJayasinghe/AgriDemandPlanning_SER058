import React, { useState } from "react";
import { useEffect } from "react";
import MyRequestsWrapper from "../../components/wrappers/farmer/MyRequestsWrapper";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

import {
  deleteSeedRequest,
  viewFarmerSeedRequest,
} from "../../api/SeedRequestAPI";
import moment from "moment/moment";
import { FiAlertCircle } from "react-icons/fi";
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsArrowRightCircle } from "react-icons/bs";

const SeedRequestList = () => {
  const [myRequests, setMyRequests] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [userId, setUserId] = useState("63177a60b7f1ef5842d83319");
  const [isDeleteSuccess, setIsDeleteSuccess] = useState(false);
  const [isSearchResultExists, setIsSearchResultExists] = useState(false);
  const [filteredRequests, setFilteredRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getRequests() {
      await viewFarmerSeedRequest(
        userId,
        setMyRequests,
        setFilteredRequests,
        setIsSearchResultExists
      ).then(() => {
        console.log("Data retrieved success");
        setIsLoading(false);
      });
    }
    getRequests();
  }, []);

  const onDelete = async (requestId) => {
    console.log("onDelete - ", requestId);

    await deleteSeedRequest(requestId, setIsDeleteSuccess)
      .then(() => {
        toast.success("Request deleted!", {
          position: "--right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(() => {
        toast.error("Something went wrong!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    await viewFarmerSeedRequest(
      userId,
      setMyRequests,
      setFilteredRequests,
      setIsSearchResultExists
    ).then(() => {
      console.log("Data retrieved success");
    });
  };

  // will develop in second sprint
  const onUpdate = (requestId) => {
    console.log("On update - ", requestId);
  };

  useEffect(() => {
    const filteredResult = myRequests.filter((request) => {
      if (searchQuery === "") {
        return request;
      } else if (
        request.category.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return request;
      } else if (
        request.type.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return request;
      }
    });

    setFilteredRequests(filteredResult);
    if (filteredResult.length > 0) {
      setIsSearchResultExists(true);
    } else {
      setIsSearchResultExists(false);
    }
  }, [searchQuery]);

  // to notify whether delete is success or not
  useEffect(() => {
    if (isDeleteSuccess === true) {
      console.log("Delete successed");
    } else {
      console.log("Delete unsuccess");
    }
  }, [isDeleteSuccess]);

  return (
    <div>
      <MyRequestsWrapper>
        <div className="font-semibold text-2xl text-center my-16">
          {" "}
          My Requests{" "}
        </div>
        {/* added toast container here, because of my easyness */}
        <ToastContainer />

        <div className="bg-red-100 shadow overflow-hidden sm:rounded-md my-4 text-sm text-red-900 p-4">
          <div className="flex">
            <BsArrowRightCircle color="black" size={18} />
            <div className="ml-3">
              Deadline for your requests is{" "}
              <i className="text-red-600">
                <u>2022-09-30</u>
              </i>
            </div>
          </div>
          <div className="flex pt-1">
            <BsArrowRightCircle color="black" size={18} />
            <div className="ml-3">
              Before the deadline is the only time you can modify or delete your
              request.
            </div>
          </div>
        </div>

        <div className="pb-4 pt-4">
          <input
            type="text"
            name="searchRequests"
            id="searchRequests"
            autoComplete="given-name"
            className="mt-2 pl-4 p-1 focus:ring-1 min-w-max w-full focus:ring-emerald-400 focus:border-emerald-400 block  shadow-sm sm:text-sm text-gray-600 border-gray-300 rounded-3xl"
            onChange={(event) => {
              setSearchQuery(event.target.value);
            }}
            placeholder="Search . . ."
          />
        </div>

        {filteredRequests.map((request, index) => (
          <div
            key={request._id}
            className="bg-emerald-100 shadow overflow-hidden sm:rounded-md my-4"
          >
            <div className="block">
              <div className="px-4 py-4 sm:px-6">
                <div className="mt-2 grid grid-cols-5">
                  <p className="flex col-span-1 items-center text-sm text-emerald-700">
                    Category
                  </p>
                  <p className="mt-2 col-span-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    : {request.category}
                  </p>
                </div>
                <div className="mt-2 grid grid-cols-5 ">
                  <p className="flex col-span-1 items-center text-sm text-emerald-700 ">
                    Type
                  </p>
                  <p className="mt-2 col-span-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    : {request.type}
                  </p>
                </div>
                <div className="mt-2 grid grid-cols-5">
                  <p className="flex col-span-1 items-center text-sm text-emerald-700">
                    Hectares
                  </p>
                  <p className="mt-2 col-span-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    : {request.sizeOfLand}
                  </p>
                </div>
                <div className="mt-3 md:mt-2 grid grid-cols-5">
                  <p className="flex col-span-1 items-center text-sm text-emerald-700">
                    Added date
                  </p>
                  <p className="md:mt-0 col-span-2 flex items-center text-sm text-gray-500">
                    : {moment(request.createdAt).format("MMMM Do YYYY")}{" "}
                    <br></br>
                    &nbsp; {moment(request.createdAt).format("LTS")}
                  </p>
                </div>
                <div className="grid grid-cols-5 ">
                  <div className="col-start-4 col-span-1 justify-end flex">
                    <button
                      className="flex min-w-fit bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 transition-colors"
                      onClick={() => onDelete(request._id)}
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
                      onClick={() => onUpdate(request._id)}
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

        {isLoading === true ? (
          <>
            <div>
              <div className="flex justify-center mt-24">
                <CircularProgress color="success" />
              </div>
            </div>
          </>
        ) : (
          <>
            {isSearchResultExists === false && (
              <>
                <div className="grid justify-center mt-16">
                  <div className="flex justify-center">
                    <FiAlertCircle size={80} color="#63736b" />
                  </div>
                  <div className="font-semibold text-gray-500 text-xl mt-4">
                    No results found
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </MyRequestsWrapper>
    </div>
  );
};

export default SeedRequestList;
