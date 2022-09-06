import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { ChevronDownIcon } from '@heroicons/react/solid'

export default function AllFarmers() {

    const [farmers, setFarmers] = useState([]);
    const [search, setSearch] = useState("");

    const setFarmer = (farmer) => {
        localStorage.setItem('Farmer', JSON.stringify(farmer));
    };

    useEffect(() => {
        axios.get('http://localhost:8000/api/farmers/')
            .then((res) => {
                setFarmers(res.data);
            });
    }, []);

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-2xl font-semibold text-gray-900">All Farmers</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all registered farmers including their name, email and land size.
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    >
                        Add Farmer
                    </button>
                </div>
            </div>
            {/*Search Bar*/}
            <div>
                <input type="text" placeholder='Search...' onChange={(e) => {
                    setSearch(e.target.value);
                }}/>
                <i className='bx bx-search'></i>
            </div>
            {/*End of Search Bar*/}
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                        <a href="#" className="group inline-flex">
                                            Name
                                            <span className="ml-2 flex-none rounded bg-gray-200 text-gray-900 group-hover:bg-gray-300">
                                                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        <a href="#" className="group inline-flex">
                                            Email
                                            <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                                                <ChevronDownIcon
                                                    className="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        <a href="#" className="group inline-flex">
                                            Size of Land (Hectares)
                                            <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                                                <ChevronDownIcon
                                                    className="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </a>
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                {farmers
                                    .filter((farmer) => {
                                        if(search === "") {
                                            return farmer
                                        }else if(farmer.name.toString().toLowerCase().includes(search.toLowerCase())
                                            || farmer.email.toString().toLowerCase().includes(search.toLowerCase())
                                            || farmer.hectare.toString().toLowerCase().includes(search.toLowerCase())
                                        ) {
                                            return farmer
                                        }
                                    })
                                    .map((farmer) => (
                                    <tr key={farmer.email}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                            {farmer.name}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{farmer.email}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{farmer.hectare}</td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                            <a onClick={() => setFarmer(farmer)} href="/admin/farmerProfile" className="text-indigo-600 hover:text-indigo-900">
                                                View Profile<span className="sr-only">, {farmer.name}</span>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
