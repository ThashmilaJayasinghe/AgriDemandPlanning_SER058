import React, {useEffect, useState} from 'react';
import {Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions} from "@mui/material";

import axios from "axios";

import { Link } from "react-router-dom";
import {RiDeleteBin6Line} from "react-icons/ri";
import {AiOutlineEdit} from "react-icons/ai";
import {CgViewList} from "react-icons/cg"

export default function AllBuyers(){
    const [buyers, setBuyers] = useState([]);
    const [buyersDemands,setBuyerDemands] = useState([]);
    const [open, setOpen] = useState(false);
    const [search,setSearch] = useState("")

    const handleOpen = () => {
      setOpen(true)
        console.log("open click")
    }

    const handleClose = () => {
      setOpen(false)
    }


    useEffect(()=>{
        axios.get('http://localhost:8000/api/buyer/')
            .then((res)=>{
                setBuyers(res.data);
            })
    },[]);

    return(
        <div>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto mb-3">
                        <h1 className="text-2xl font-semibold text-gray-900">All Buyers</h1>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:flex-none">

                        <Link to="/admin/all-buyers/add">
                        <button type="button" className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 sm:w-auto bg-green-600">
                            +Add new
                        </button></Link>
                    </div>
                </div>
                <div className="pb-4">
                    <input
                        type="text"
                        name="searchRequests"
                        id="searchRequests"
                        className="mt-2 pl-4 p-1 focus:ring-1 min-w-max w-full focus:ring-emerald-400 focus:border-emerald-400 block  shadow-sm sm:text-sm text-gray-600 border-gray-300 rounded-3xl"
                        onChange={(e) => {setSearch(e.target.value)}}
                        placeholder="Search . . ."
                    />
                </div>
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
                            Shop Name
                    </th>
                    <th
                        scope="col"
                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                    >
                            Address
                    </th>
                    <th
                        scope="col"
                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                    >
                            District
                    </th>
                    <th
                        scope="col"
                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                    >
                            Province
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Email
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Contact Number
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Manage
                </th>
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
        {buyers
            .filter((buyer) => {
                if (search == "") {
                    return buyer
                } else if (buyer.fullName.toLowerCase().includes(search.toLowerCase())) {
                    return buyer
                } else if (buyer.province.toLowerCase().includes(search.toLowerCase())){
                    return buyer
                } else if (buyer.district.toLowerCase().includes(search.toLowerCase())){
                    return buyer
                }
            })
            .map((buyer) => {

                const setData =(buyer)=>{
                    let {_id,fullName,NIC,ShopName,gender, address,province, district,  email, contactNumber} = buyer;
                    localStorage.setItem('id',_id);
                    localStorage.setItem('fullName',fullName);
                    localStorage.setItem('nic',NIC);
                    localStorage.setItem('shopName',ShopName);
                    localStorage.setItem('gender',gender);
                    localStorage.setItem('address',address);
                    localStorage.setItem('district',district);
                    localStorage.setItem('province',province);
                    localStorage.setItem('email',email);
                    localStorage.setItem('contactNumber',contactNumber);
                }
            const getBuyers = () => {
                axios.get("http://localhost:8000/api/buyer/")
                    .then((getBuyers) => {
                        setBuyers(getBuyers.data);
                    })
            }

            const onDelete = (id) => {
                if (window.confirm("Are you want to delete  - "+buyer.fullName)){
                    axios.delete("http://localhost:8000/api/buyer/" +id)
                        .then(() => {
                            getBuyers();
                        })
                }
            }

            const getBuyerDemands = (id)=>{
                axios.get("http://localhost:8000/api/seller/"+id)
                    .then((getBuyerDemands)=>{
                        if(!getBuyerDemands){
                            alert("Demands have not set yet.")
                            console.log("empty");
                        }else {
                            setBuyerDemands(getBuyerDemands.data.demands)
                            console.log(getBuyerDemands.data.demands);
                        }
                })

            }
            return(
            <tr key={buyer.email}>
                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                    {buyer.fullName}
                    <dl className="font-normal lg:hidden">
                        <dt className="sr-only">Shop Name</dt>
                        <dd className="mt-1 truncate text-gray-700">{buyer.ShopName}</dd>
                        <dt className="sr-only ">District</dt>
                        <dd className="mt-1 truncate text-gray-500 ">{buyer.district}</dd>
                        <dt className="sr-only ">Province</dt>
                        <dd className="mt-1 truncate text-gray-500 ">{buyer.province}</dd>
                    </dl>
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{buyer.ShopName}</td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{buyer.address}</td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{buyer.district}</td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{buyer.province}</td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{buyer.email}</td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{buyer.contactNumber}</td>
                <td className="w-full shrink-0 px-3 py-4 text-sm text-gray-500 sm:table-cell">
                    <button className="mr-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-2 py-1 text-sm font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none bg-green-600" onClick={()=>(getBuyerDemands(buyer._id),handleOpen())}>
                        <CgViewList
                            size={18}
                        />
                    </button>
                    <Link to="/admin/update-buyer">
                    <button className="mr-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-2 py-1 text-sm font-medium text-white shadow-sm hover:bg-amber-800 focus:outline-none bg-amber-600" onClick={()=>setData(buyer)}>
                        <AiOutlineEdit
                        size={18}
                    /></button>
                    </Link>
                    <button className="mr-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-2 py-1 text-sm font-medium text-white shadow-sm hover:bg-red-800 focus:outline-none bg-red-600" onClick={() => onDelete(buyer._id)}>
                        <RiDeleteBin6Line
                        size={18}
                    /></button>

                </td>
                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                    fullWidth={true}

                                >
                                    <DialogTitle id="alert-dialog-title">
                                        {/*<b className="align-middle pb-4">{buyer.fullName}</b>*/}
                                        {/*<br/>*/}
                                        {/*<p className="align-middle text-gray-900 pb-4">{buyer.email}</p>*/}
                                    </DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description">

                                            <table width="100%" className="min-w-full divide-y divide-gray-300">
                                                <thead className="bg-gray-50" style={{height: "40px"}}>
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Category</th>
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Type</th>
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Weight</th>
                                                </thead>
                                                {buyersDemands.map((demands)=> {
                                                        return(
                                                <tbody className="divide-y divide-gray-200 bg-white" style={{height: "40px"}}>
                                                <tr style={{height: "40px"}}>
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{demands.category}</td>
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{demands.type}</td>
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{demands.sellings}</td>
                                                </tr>
                                                </tbody>
                                                        )
                                                    }
                                                )
                                                }
                                            </table>

                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <button type="button" className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm" onClick={() => (handleClose())}>
                                            OK
                                        </button>
                                    </DialogActions>
                                </Dialog>
            </tr>

            )
        })}
            </tbody>
            </table>
            </div>
            </div>


        </div>
    )
}