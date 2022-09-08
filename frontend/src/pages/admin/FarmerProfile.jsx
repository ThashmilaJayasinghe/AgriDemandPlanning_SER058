import React, {useEffect, useState} from "react";
import moment from "moment/moment";
import {RiDeleteBin6Line} from "react-icons/ri";
import {AiOutlineEdit} from "react-icons/ai";


export default function FarmerProfile() {

    const [farmer, setFarmer] = useState({});

    useEffect(() => {
        setFarmer(JSON.parse(localStorage.getItem('Farmer')));
        console.log(farmer);
    }, []);

    return(
        <div className="px-4 sm:x-6 lg:px-8">
            <div className="sm:flex sm:items-center my-10">
                <div className="sm:flex-auto mb-3">
                    <h1 className="text-2xl font-semibold text-gray-900">Farmer Profile</h1>
                </div>
            </div>

            <div className="-mx-4 mt-8 overflow-hidden bg-emerald-50 shadow ring-1 ring-emerald-500 ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
            {/*<div className="mx-6 md:mx-32 lg:mx-44 overflow-hidden bg-emerald-50 shadow ring-1 ring-emerald-500 ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">*/}
                <div className="block">
                    <div className="px-4 py-4 sm:px-6">
                        <div className="mt-2 grid grid-cols-5">
                            <p className="flex col-span-1 items-center text-sm text-gray-500">
                                Category
                            </p>
                            <p className="mt-2 col-span-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                : {farmer.category}
                            </p>
                        </div>
                        <div className="mt-2 grid grid-cols-5 ">
                            <p className="flex col-span-1 items-center text-sm text-gray-500 ">
                                Type
                            </p>
                            <p className="mt-2 col-span-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                : {farmer.type}
                            </p>
                        </div>
                        <div className="mt-2 grid grid-cols-5">
                            <p className="flex col-span-1 items-center text-sm text-gray-500">
                                Hectares
                            </p>
                            <p className="mt-2 col-span-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                : {farmer.sizeOfLand}
                            </p>
                        </div>
                        <div className="mt-3 md:mt-2 grid grid-cols-5">
                            <p className="flex col-span-1 items-center text-sm text-gray-500">
                                Added date
                            </p>
                            <p className="md:mt-0 col-span-2 flex items-center text-sm text-gray-500">
                                : {moment(farmer.createdAt).format("MMMM Do YYYY")}{" "}
                                <br></br>
                                &nbsp; {moment(farmer.createdAt).format("LTS")}
                            </p>
                        </div>
                        <div className="grid grid-cols-5 ">
                            <div className="col-start-4 col-span-1 justify-end flex">
                                <button
                                    className="flex min-w-fit bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 transition-colors"
                                    // onClick={() => onDelete(farmer._id)}
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
                                    // onClick={() => onUpdate(farmer._id)}
                                >
                                    <AiOutlineEdit
                                        className="mt-0 mr-0 md:mt-1 md:mr-1"
                                        size={18}
                                    />
                                    <p className="hidden md:block"> Update</p>
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 ">
                            <div className="col-start-4 col-span-1 justify-end flex">
                                <button
                                    className="flex min-w-fit bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 transition-colors"
                                    // onClick={() => onDelete(farmer._id)}
                                >
                                    <RiDeleteBin6Line
                                        className="mt-0 mr-0 md:mt-1 md:mr-1"
                                        size={18}
                                    />
                                    <p className="hidden md:block">Send Message</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}