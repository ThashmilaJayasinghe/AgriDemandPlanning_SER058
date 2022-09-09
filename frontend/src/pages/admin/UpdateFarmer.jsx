import React, { useState, useEffect, Fragment } from "react";
import {useNavigate} from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import FormWrapper from "../../components/wrappers/FormWrapper";
import {MdOutlineCancel} from "react-icons/md";
import {AiOutlineEdit, AiOutlineEye} from "react-icons/ai";
import {RiDeleteBin6Line} from "react-icons/ri";
import {toast} from "react-toastify";

import { getFarmer, updateFarmer } from '../../api/FarmerAPI';

export default function UpdateFarmer() {

    const [farmer, setFarmer] = useState(JSON.parse(localStorage.getItem('Farmer')));
    const [isSuccess, setIsSuccess] = useState(false);
    const [isAddCategory, setIsAddCategory] = useState(false);
    const [fullName, setFullName] = useState("");
    const [nic , setNic] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [district, setDistrict] = useState("");
    const [province, setProvince] = useState("");
    const [email, setEmail] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [hectare,setHectare] = useState("");
    const [categories,setCategories] = useState([]);
    const [newCategory,setNewCategory] = useState("");

    const navigate = useNavigate;

    const onUpdate = async (farmerId) => {
        if (window.confirm("Do you wish to update farmer?")) {

            const updatedFarmer = {
                fullName,
                NIC:nic,
                gender,
                address,
                district,
                province,
                email,
                contactNumber,
                hectare,
                categories
            };

            await updateFarmer(farmerId, updatedFarmer, setFarmer)
                .then(async () => {
                    alert('updated!');
                    navigate('/admin/farmer-profile')
                    toast.success("Farmer updated", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    await setIsSuccess(true);
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
        };
    };

    const onAddCategory = async() => {
        // await addQualification(email, newQualification)
        //     .then(async() => {
        //         console.log("new qualification added")
        //
        //         toast.success('New qualification added!', {
        //             position: "top-right",
        //             autoClose: 3000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined,
        //         });
        //
        //         await getStaff(email, setStaffDetails)
        //             .then((res) => {
        //                 console.log("staff data retrieved")
        //             })
        //     })

        setCategories([...categories, newCategory]) //simple value
    }

    const onDeleteCategory = async(arrItem) => {
        // await deleteQualification(email, arrItem)
        //     .then(async() =>
        //     {
        //         console.log("Delete success")
        //
        //         toast.info('Qualification removed!', {
        //             position: "top-right",
        //             autoClose: 3000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined,
        //         });
        //
        //
        //
        //         await getStaff(email, setStaffDetails)
        //             .then((res) => {
        //                 console.log("staff data retrieved")
        //             })
        //     })



    }

    useEffect(() => {

        setFullName(farmer.fullName);
        setNic(farmer.NIC);
        setGender(farmer.gender);
        setAddress(farmer.address);
        setDistrict(farmer.district);
        setProvince(farmer.province);
        setEmail(farmer.email);
        setContactNumber(farmer.contactNumber);
        setHectare(farmer.hectare);
        setCategories(farmer.categories);

        if(isSuccess){
            navigate('/admin/farmer-profile')
        }

    }, [isSuccess, navigate]);


    return (
        <div>
            <div className="sm:flex sm:items-center my-10">
                <div className="sm:flex-auto mb-3">
                    <h1 className="text-2xl font-semibold text-gray-900">Update Farmer</h1>
                </div>
            </div>
        <FormWrapper>
            <>
                <form className="space-y-8 divide-y divide-gray-200">
                    <div className="space-y-8 divide-y divide-gray-200">
                        <div className="pt-8">
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
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
                                            value={fullName}
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            onChange={(e)=>(setFullName(e.target.value))}
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
                                            value={nic}
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            onChange={(e)=>(setNic(e.target.value))}
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
                                                value="Male"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                onChange={(e)=>(setGender(e.target.value))}
                                            />
                                            <label className="ml-3 block text-sm font-medium text-gray-700">
                                                Male
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="push-female"
                                                name="push-gender"
                                                type="radio"
                                                value="Female"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                onChange={(e)=>(setGender(e.target.value))}
                                            />
                                            <label className="ml-3 block text-sm font-medium text-gray-700">
                                                Female
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>

                            </div>
                        </div>

                        <div className="pt-8">
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Location Details</h3>
                            </div>
                            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                <div className="sm:col-span-6">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Address
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="address"
                                            id="address"
                                            value={address}
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            onChange={(e)=>(setAddress(e.target.value))}
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
                                            value={district}
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            onChange={(e)=>(setDistrict(e.target.value))}
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
                                            placeholder="Farmer's province"
                                            value={province}
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            onChange={(e)=>(setProvince(e.target.value))}
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
                            </div>
                            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                <div className="sm:col-span-6">
                                    <label  className="block text-sm font-medium text-gray-700">
                                        Email Address
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={email}
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            onChange={(e)=>(setNewCategory(e.target.value))}
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
                                            value={contactNumber}
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            onChange={(e)=>(setContactNumber(e.target.value))}
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="pt-8">
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Crop Details</h3>
                            </div>
                            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                <div className="sm:col-span-6">
                                    <label  className="block text-sm font-medium text-gray-700">
                                        Size of Land (Hectare)
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="number"
                                            name="hectare"
                                            id="hectare"
                                            value={hectare}
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            onChange={(e)=>(setEmail(e.target.value))}
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-6">
                                    <label  className="block text-sm font-medium text-gray-700">
                                        Categories
                                    </label>
                                    <table className="min-w-full divide-y divide-gray-300 shadow-sm border-gray-300 rounded-md">
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                        {categories ? (<>
                                            {categories
                                                .map((category) => (
                                                    <tr key={farmer._id}>
                                                        <td className="w-full max-w-0 py-4 pl-4 pr-3 text-gray-500 text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                                                            {category}
                                                        </td>
                                                        <td className="py-4 px-3 text-right text-sm font-medium sm:pr-6">
                                                            <button
                                                                className="flex w-fit text-white bg-red-500 py-1 px-4 rounded-lg hover:bg-red-600 transition-colors"
                                                                onClick={() => onDeleteCategory()}
                                                            >
                                                                <RiDeleteBin6Line
                                                                    className="mt-0 mr-0 md:mt-1 md:mr-1"
                                                                    size={18}
                                                                />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                        </>) : (<>
                                            <tr key={farmer._id}>
                                                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-gray-500 text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                                                    No categories added yet
                                                </td>
                                            </tr>
                                        </>)}
                                        {isAddCategory ? (<>
                                            <div className="sm:col-span-6">
                                                <label  className="block text-sm font-medium text-gray-700">
                                                    New Category
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        type="text"
                                                        name="category"
                                                        id="category"
                                                        placeholder="category"
                                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                        onChange={(e)=>(setEmail(e.target.value))}
                                                    />
                                                    <button
                                                        className="flex w-fit text-white bg-emerald-500 py-1 px-4 rounded-lg hover:bg-emerald-600 transition-colors"
                                                        onClick={() => (setIsAddCategory(false), onAddCategory())}
                                                    >
                                                        <p className="hidden md:block">Add</p>
                                                    </button>
                                                    <button
                                                        className="flex w-fit text-white bg-red-500 py-1 px-4 rounded-lg hover:bg-red-600 transition-colors"
                                                        onClick={() => (setIsAddCategory(false))}
                                                    >
                                                        <p className="hidden md:block">Cancel</p>
                                                    </button>
                                                </div>
                                            </div>
                                        </>) : (<>
                                            <button
                                                className="flex w-fit text-white bg-emerald-500 py-1 px-4 rounded-lg hover:bg-green-600 transition-colors"
                                                onClick={() => setIsAddCategory(true)}
                                            >
                                                <p className="hidden md:block">+ Add Category</p>
                                            </button>
                                        </>)}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/*Buttons to cancel changes and update farmer*/}
                    <div className="grid grid-cols-5 pt-4">
                        {/*Button for cancel function*/}
                        <div className="col-start-4 col-span-1 justify-end flex">
                            <a
                                className="flex min-w-fit bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 transition-colors"
                                href="/admin/farmer-profile"
                            >
                                <MdOutlineCancel
                                    className="mt-0 mr-0 md:mt-1 md:mr-1"
                                    size={18}
                                />
                                <p className="hidden md:block">Cancel</p>
                            </a>
                        </div>
                        {/*Button to update*/}
                        <div className="col-span-1 justify-center flex">
                            <button
                                className="flex w-fit text-white bg-emerald-500 py-1 px-4 rounded-lg hover:bg-emerald-600 transition-colors"
                                onClick={() => onUpdate(farmer._id)}
                            >
                                <AiOutlineEdit
                                    className="mt-0 mr-0 md:mt-1 md:mr-1"
                                    size={18}
                                />
                                <p className="hidden md:block">Update</p>
                            </button>
                        </div>
                    </div>
                </form>
            </>
        </FormWrapper>
        </div>
    );
};



