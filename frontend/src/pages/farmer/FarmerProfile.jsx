import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import MyRequestsWrapper from "../../components/wrappers/farmer/MyRequestsWrapper";
import moment from "moment/moment";
import {AiOutlineEdit} from "react-icons/ai";

export default function FarmerProfile(){
    const [user, setUSer] = useState('');
    const [id, setID] = useState('630e177910470806f04c70ad');

    useEffect(()=>{
        function getUser(){
            axios.get('http://localhost:8000/api/farmers/'+id)
                .then((res)=>{
                    setUSer(res.data)
                    console.log(res.data)
                })
                .catch((err)=>{
                    alert(err.message)
                })
        }
        getUser();
    },[])


    function passValue(data) {
        let {_id,fullName, address, NIC,contactNumber, district, hectare, profileImg} = data;
        localStorage.setItem('id', _id);
        localStorage.setItem('fullName', fullName);
        localStorage.setItem('address', address);
        localStorage.setItem('NIC', NIC);
        localStorage.setItem('contactNumber', contactNumber);
        localStorage.setItem('district', district);
        localStorage.setItem('hectare', hectare);
        localStorage.setItem('profileImg', profileImg);
    }

    return(
        <div>
            <div className=" mx-8  md:mx-32 lg:mx-52">
                <div className="my-16">
                    <p className="font-semibold text-2xl text-center"> Profile</p>
                    <br/>

            <div
                style={{
                    borderRadius: "10px",
                    margin: "10px 50px 10px 50px",
                    padding: "",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                }}
            >
            <div style={{paddingInline: "3rem", paddingTop: "3rem", paddingBottom: "3rem"}}>

            <center>
            <img src={user.profileImg} alt="Profile Picture"
                 style={{borderRadius: 10000, width:120, height:120}}/>
            </center>

                <div className="col-span-1 justify-center flex" style={{marginTop: 10}}>
                    <Link to={'/farmer/profileEdit'}>
                    <button
                        className="flex w-fit text-white bg-green-500 py-1 px-3 rounded-lg hover:bg-green-600 transition-colors"
                        onClick={()=>passValue(user)}
                    >
                        <AiOutlineEdit
                            className="mt-0 mr-0 md:mt-1 md:mr-1"
                            size={18}
                        />
                    </button>
                    </Link>
                </div>

            <div style={{ marginBottom: 10, marginTop: 30 ,marginLeft:300}} >

                <div className="mt-2 grid grid-cols-5 ">
                    <p className="flex col-span-1 items-center text-m text-gray-500 ">
                        Name
                    </p>
                    <p className="mt-2 col-span-2 flex items-center text-m text-gray-500 sm:mt-0">
                        : &nbsp;&nbsp; {user.fullName}
                    </p>
                </div>
                <div className="mt-2 grid grid-cols-5 ">
                    <p className="flex col-span-1 items-center text-m text-gray-500 ">
                        Address
                    </p>
                    <p className="mt-2 col-span-2 flex items-center text-m text-gray-500 sm:mt-0">
                        : &nbsp;&nbsp; {user.address}
                    </p>
                </div>
                <div className="mt-2 grid grid-cols-5 ">
                    <p className="flex col-span-1 items-center text-m text-gray-500 ">
                        NIC
                    </p>
                    <p className="mt-2 col-span-2 flex items-center text-m text-gray-500 sm:mt-0">
                        : &nbsp;&nbsp; {user.NIC}
                    </p>
                </div>
                <div className="mt-2 grid grid-cols-5 ">
                    <p className="flex col-span-1 items-center text-m text-gray-500 ">
                        Telephone
                    </p>
                    <p className="mt-2 col-span-2 flex items-center text-m text-gray-500 sm:mt-0">
                        : &nbsp;&nbsp; 0{user.contactNumber}
                    </p>
                </div>
                <div className="mt-2 grid grid-cols-5 ">
                    <p className="flex col-span-1 items-center text-m text-gray-500 ">
                        District
                    </p>
                    <p className="mt-2 col-span-2 flex items-center text-m text-gray-500 sm:mt-0">
                        : &nbsp;&nbsp; {user.district}
                    </p>
                </div>
                <div className="mt-2 grid grid-cols-5 ">
                    <p className="flex col-span-1 items-center text-m text-gray-500 ">
                        Hectares
                    </p>
                    <p className="mt-2 col-span-2 flex items-center text-m text-gray-500 sm:mt-0">
                        : &nbsp;&nbsp; {user.hectare}
                    </p>
                </div>
            </div>

                <div className="flex items-center justify-center mt-10">
                    <div className="px-4 py-2 border border-transparent rounded-md shadow-sm
                    text-base font-medium text-white bg-emerald-500 hover:bg-emerald-600 transition-colors cursor-pointer"
                    >
                        Back
                    </div>
                </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}