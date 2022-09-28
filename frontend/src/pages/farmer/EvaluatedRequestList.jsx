import { ClassNames } from "@emotion/react";
import { CircularProgress } from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { AiOutlineDownload, AiOutlineEdit } from "react-icons/ai";
import { FiAlertCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { viewFarmerSeedRequest } from "../../api/SeedRequestAPI";
import MyRequestsWrapper from "../../components/wrappers/farmer/MyRequestsWrapper";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const EvaluatedRequests = () => {
  const [myRequests, setMyRequests] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRequests, setFilteredRequests] = useState([]);
  const [evaluatedRequests, setEvaluatedRequests] = useState([]);
  const [userId, setUserId] = useState("63177a60b7f1ef5842d83319");
  const [isSearchResultExists, setIsSearchResultExists] = useState(false);
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

  useEffect(() => {
    const filteredResult = myRequests.filter((request) => {
      if (searchQuery === "" || searchQuery == null) {
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

  const onDownload = (data) => {
    console.log("Download clicked");
    console.log(data);
  };

  return (
    <div>
      <MyRequestsWrapper>
        <div className="font-semibold text-2xl text-center my-16">
          {" "}
          Evaluated Requests{" "}
        </div>
        <ToastContainer />

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
                {request.status == "accepted" && (
                  <>
                    <div className="mb-4 p-1 bg-green-200 rounded-lg">
                      <p className="justify-center flex text-green-600">
                        Accepted
                      </p>
                    </div>
                  </>
                )}

                {request.status == "rejected" && (
                  <>
                    <div className="mb-4 p-1 bg-red-200 rounded-lg">
                      <p className="justify-center flex text-red-600">
                        Rejected
                      </p>
                    </div>
                  </>
                )}

                {request.status == "new" ||
                  (request.status == null && (
                    <>
                      <div className="mb-4 p-1 bg-yellow-200 rounded-lg">
                        <p className="justify-center flex text-yellow-600">
                          Pending
                        </p>
                      </div>
                    </>
                  ))}

                <div className="mt-2 grid grid-cols-5">
                  <p className="flex col-span-1 items-center text-sm text-emerald-700">
                    Request Status
                  </p>
                  <p className="mt-2 col-span-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    {request.status ? <>: {request.status}</> : <>: None</>}
                  </p>
                </div>
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
                <div className="mt-2 grid grid-cols-5">
                  <p className="flex col-span-1 items-center text-sm text-emerald-700">
                    Requested amount(Kg)
                  </p>
                  <p className="mt-2 col-span-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    : {request.weight}
                  </p>
                </div>
                <div className="mt-2 grid grid-cols-5">
                  <p className="flex col-span-1 items-center text-sm text-emerald-700">
                    Location
                  </p>
                  <p className="mt-2 col-span-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    : {request.location}
                  </p>
                </div>
                <div className="mt-2 grid grid-cols-5">
                  <p className="flex col-span-1 items-center text-sm text-emerald-700">
                    Evaluated date
                  </p>
                  <p className="md:mt-0 col-span-2 flex items-center text-sm text-gray-500">
                    : {moment(request.updatedAt).format("MMMM Do YYYY")}{" "}
                    <br></br>
                    &nbsp; {moment(request.updatedAt).format("LTS")}
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
                  <div className="col-span-1 col-start-5 justify-center flex">
                    <button
                      className="flex w-fit text-white bg-green-500 py-1 px-4 rounded-lg hover:bg-green-600 transition-colors"
                      onClick={() => onDownload(request)}
                    >
                      <AiOutlineDownload
                        className="mt-0 mr-0 md:mt-1 md:mr-1"
                        size={20}
                      />
                      <p className="hidden md:block"> Download</p>
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

export default EvaluatedRequests;
