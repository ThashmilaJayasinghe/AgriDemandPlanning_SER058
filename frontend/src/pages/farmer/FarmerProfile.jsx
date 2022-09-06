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
        let {_id,fullName, address, NIC,contactNumber, district, hectare} = data;
        localStorage.setItem('id', _id);
        localStorage.setItem('fullName', fullName);
        localStorage.setItem('address', address);
        localStorage.setItem('NIC', NIC);
        localStorage.setItem('contactNumber', contactNumber);
        localStorage.setItem('district', district);
        localStorage.setItem('hectare', hectare);
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
            {/*<MyRequestsWrapper>*/}
                <div className="font-semibold text-2xl text-center my-16">
                    {" "}
                    Profile{" "}
                </div>

            <label>Name  : {user.fullName}</label><br/>
            <label>Address : {user.address} </label><br/>
            <label>NIC : {user.NIC}</label><br/>
            <label>Telephone : {user.contactNumber}</label><br/>
            <label>District : {user.district}</label><br/>
            <label>Hectares : {user.hectare}</label><br/>

            <button>Back</button><br/>
            <button onClick={()=>deleteUser(id)}>Delete Profile</button><br/>
            <Link to={'/farmer/profileEdit'}>
                <button onClick={()=>passValue(user)}>Edit</button>
            </Link>
                {/*</MyRequestsWrapper>*/}
        </div>

    )
}