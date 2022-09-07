import React from 'react';

import FormWrapper from "../components/wrappers/FormWrapper";

export default function AddBuyer() {
        return (
            <div>
                <FormWrapper>
                    <div>
                        <form className="space-y-8 divide-y divide-gray-200">
                            <div className="space-y-8 divide-y divide-gray-200">
                                <div className="pt-8">
                                    <div>
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
                                        <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
                                    </div>
                                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                        <div className="sm:col-span-6">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Full Name
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    id="fullName"
                                                    placeholder="Buyer's Full Name"
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label className="block text-sm font-medium text-gray-700">
                                                NIC
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="nic"
                                                    id="nic"
                                                    placeholder="Buyer's NIC Number"
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Shop Name
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="shopName"
                                                    id="shopName"
                                                    placeholder="Buyer's Shop Name"
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>

                                        <fieldset className="sm:col-span-6">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Gender
                                            </label>
                                            <div className="mt-4 space-y-4 ">
                                                <div className="flex items-center">
                                                    <input
                                                        id="push-male"
                                                        name="push-gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Male
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="push-female"
                                                        name="push-gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Female
                                                    </label>
                                                </div>
                                            </div>
                                        </fieldset>

                                    </div>
                                </div>

                                <div className="pt-8">
                                    <div>
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Location Details  of Shop</h3>
                                        <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
                                    </div>
                                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                        <div className="sm:col-span-6">
                                            <label htmlFor="Address" className="block text-sm font-medium text-gray-700">
                                                Address
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="address"
                                                    id="address"
                                                    placeholder="Buyer's Shop Address"
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Districts
                                            </label>
                                            <div className="mt-1">
                                                <select
                                                    id="district"
                                                    name="district"
                                                    placeholder="Shop's District"
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                >
                                                    <option>Colombo</option>
                                                    <option>Gampaha</option>
                                                    <option>Kalutara</option>
                                                    <option>Kandy</option>
                                                    <option>Matale</option>
                                                    <option>Nuwara Eliya</option>
                                                    <option>Galle</option>
                                                    <option>Matara</option>
                                                    <option>Hambantota</option>
                                                    <option>Jaffna</option>
                                                    <option>Kilinochchi</option>
                                                    <option>Mannar</option>
                                                    <option>Vavuniya</option>
                                                    <option>Mullaitivu</option>
                                                    <option>Batticaloa</option>
                                                    <option>Ampara</option>
                                                    <option>Trincomalee</option>
                                                    <option>Kurunegala</option>
                                                    <option>Puttalam</option>
                                                    <option>Anuradhapura</option>
                                                    <option>Polonnaruwa</option>
                                                    <option>Moneragala</option>
                                                    <option>Ratnapura</option>
                                                    <option>Kegalle</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Province
                                            </label>
                                            <div className="mt-1">
                                                <select
                                                    id="province"
                                                    name="province"
                                                    placeholder="Shop's Province"
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                >
                                                    <option>Western</option>
                                                    <option>Central</option>
                                                    <option>Southern</option>
                                                    <option>Northern</option>
                                                    <option>Eastern</option>
                                                    <option>North Western</option>
                                                    <option>North Central</option>
                                                    <option>Uva</option>
                                                    <option>Sabaragamuwa</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="pt-8">
                                    <div>
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Contact Details</h3>
                                        <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
                                    </div>
                                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                        <div className="sm:col-span-6">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                Email Address
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Buyer's Email Address"
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Contact Number
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="number"
                                                    name="number"
                                                    id="number"
                                                    placeholder="Buyer's Contact Number"
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="pt-8">
                                    <div>
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Login Details</h3>
                                        <p className="mt-1 text-sm text-gray-500">Use a NIC Number as buyer's password.</p>
                                    </div>
                                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                        <div className="sm:col-span-6">
                                            <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
                                                User Name
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="userName"
                                                    id="userName"
                                                    placeholder="Buyer's User Name"
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                                Password
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    placeholder="Buyer's Password"
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                                Conform Password
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    placeholder="Buyer's Conform Password"
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-5">
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </FormWrapper>
            </div>
        );

}