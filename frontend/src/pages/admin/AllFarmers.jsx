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
            <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                            Name
                        </th>
                        <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                        >
                            Email
                        </th>
                        <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                        >
                            Size of Land (Hectares)
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                            <span className="sr-only">View Profile</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                    {farmers
                        .filter((farmer) => {
                            if(search === "") {
                                return farmer
                            }else if(farmer.fullName.toString().toLowerCase().includes(search.toLowerCase())
                                || farmer.email.toString().toLowerCase().includes(search.toLowerCase())
                                || farmer.hectare.toString().toLowerCase().includes(search.toLowerCase())
                            ) {
                                return farmer
                            }
                        })
                        .map((farmer) => (
                            <tr key={farmer.email}>
                                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                                    {farmer.fullName}
                                    <dl className="font-normal lg:hidden">
                                        <dt className="sr-only">Email</dt>
                                        <dd className="mt-1 truncate text-gray-700">{farmer.email}</dd>
                                        <dt className="sr-only sm:hidden">Land Size</dt>
                                        <dd className="mt-1 truncate text-gray-500 sm:hidden">{farmer.hectare}</dd>
                                    </dl>
                                </td>
                                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{farmer.email}</td>
                                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{farmer.hectare}</td>
                                <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                    <a onClick={() => setFarmer(farmer)} href="/admin/farmerProfile" className="text-indigo-600 hover:text-indigo-900">
                                        View Profile<span className="sr-only">, {farmer.fullName}</span>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
