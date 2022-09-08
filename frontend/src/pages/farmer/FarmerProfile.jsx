import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import MyRequestsWrapper from "../../components/wrappers/farmer/MyRequestsWrapper";

export default function FarmerProfile(){
    const [user, setUSer] = useState('');
    const [id, setID] = useState('63177a60b7f1ef5842d83319');

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

    function deleteUser(id){
        axios.delete('http://localhost:8000/api/farmers/'+id)
            .then(()=>{
                alert('User deleted Successfully')
                window.location.href = '/'
            })
            .catch((err)=>{
                alert(err);
            })
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

            <div style={{fontSize: 16, marginBottom: 10, marginTop: 30 ,marginLeft:240}} >
            <label>Name     : {user.fullName}</label><br/>
            <label>Address  : {user.address} </label><br/>
            <label>NIC      : {user.NIC}</label><br/>
            <label>Telephone : {user.contactNumber}</label><br/>
            <label>District : {user.district}</label><br/>
            <label>Hectares : {user.hectare}</label><br/>
            </div>


            <button>Back</button><br/>
            <button onClick={()=>deleteUser(id)}>Delete Profile</button><br/>
            <Link to={'/farmer/profileEdit'}>
                <button onClick={()=>passValue(user)}>Edit</button>
            </Link>
            </div></div>
                </div></div>
        </div>

    )
}