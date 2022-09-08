import React, {useEffect, useState} from "react";
import axios from "axios";
import storage from "./firebaseConfig.js"
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

export default function UpdateFarmerProfile(){

    const [id, setID] = useState('');
    const [fullName, setName] = useState('');
    const [address, setAddress] = useState('');
    const [NIC, setNIC] = useState('');
    const [contactNumber, setTelephone] = useState('');
    const [hectare, setHectares] = useState('');
    const [district, setDistrict] = useState('');
    const [percent, setPercent] = useState(0);
    // State to store uploaded file
    const [file, setFile] = useState("");
    const [profileImg, setProfileImg] = useState("");
    const [imgPreview, setImgPreview] = useState();

    useEffect(()=>{
        setID(localStorage.getItem('id'))
        setName(localStorage.getItem('fullName'))
        setAddress(localStorage.getItem('address'))
        setNIC(localStorage.getItem('NIC'))
        setTelephone(localStorage.getItem('contactNumber'))
        setHectares(localStorage.getItem('hectare'))
        setDistrict(localStorage.getItem('district'))
        setImgPreview(localStorage.getItem('profileImg'))
    },[])

    const handleSubmit = async (event)=>{

        await handleUpload();
        console.log('function called')
        console.log(`Pass image - ${profileImg}`)
        const updateProfile = {
            fullName,
            address,
            NIC,
            contactNumber,
            hectare,
            district,
            profileImg
        }
        axios.put('http://localhost:8000/api/farmers/'+id, updateProfile)
            .then(()=>{
                    alert('Success')
                    window.location.href = '/farmer/profile';
            })
            .catch((err)=>{
                alert(err.message)
            })
    }

    function handleUpload() {
        if (!file) {
            alert(`Please choose a file first! ${id}`)
        }

        const storageRef =  ref(storage, `/Profile/farmer/`+id)
        const uploadTask =  uploadBytesResumable(storageRef, file);

          uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                  getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                      console.log(url)
                      setProfileImg(url)
                });
            }
        );
    }

    // Handle file upload event and update state
    function handleChange(event) {
        setFile(event.target.files[0]);
        setImgPreview(URL.createObjectURL(event.target.files[0]))
    }

    return(
        <div className=" mx-8  md:mx-32 lg:mx-52">
                <div className="my-16">
                    <p className="font-semibold text-2xl text-center">Edit Profile</p>
                    <br/>

                    <div
                        style={{
                            borderRadius: "10px",
                            margin: "10px",
                            padding: "",
                            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                        }}
                    >
                    <div style={{paddingInline: "3rem", paddingTop: "3rem", paddingBottom: "3rem"}}>
                    <div>
                    <center>
                        <img src={imgPreview} alt="Profile Picture"
                                            style={{borderRadius: 10000, width:120, height:120}}/>
                    </center>
                     <div style={{alignItems: 50}}>
                    <input type="file" onChange={handleChange} accept="" />
                    <button onClick={handleUpload}>Save</button>
                     </div>
                    <p>{percent} "% done"</p>
                    </div>

                    <label
                        htmlFor="category"
                        className="block text-base font-medium text-gray-700 mt-6"
                    >
                        Name :
                    </label>

                    <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        autoComplete="given-name"
                        className="mt-2 focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 block w-full shadow-sm sm:text-sm text-gray-600 border-gray-300 rounded-md"
                        value={fullName}
                        onChange={(event) => {setName(event.target.value)}}
                    />

                    <label
                        htmlFor="category"
                        className="block text-base font-medium text-gray-700 mt-6"
                    >
                        NIC :
                    </label>

                    <input
                        type="text"
                        name="NIC"
                        id="NIC"
                        autoComplete="given-name"
                        className="mt-2 focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 block w-full shadow-sm sm:text-sm text-gray-600 border-gray-300 rounded-md"
                        value={NIC}
                        onChange={(event) => {setNIC(event.target.value)}}
                    />

                    <label
                        htmlFor="category"
                        className="block text-base font-medium text-gray-700 mt-6"
                    >
                        Address :
                    </label>

                    <input
                        type="text"
                        name="address"
                        id="address"
                        autoComplete="given-name"
                        className="mt-2 focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 block w-full shadow-sm sm:text-sm text-gray-600 border-gray-300 rounded-md"
                        value={address}
                        onChange={(event) => {setAddress(event.target.value)}}
                    />

                    <label
                        htmlFor="category"
                        className="block text-base font-medium text-gray-700 mt-6"
                    >
                        Hectares :
                    </label>

                    <input
                        type="text"
                        name="hectare"
                        id="hectare"
                        autoComplete="given-name"
                        className="mt-2 focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 block w-full shadow-sm sm:text-sm text-gray-600 border-gray-300 rounded-md"
                        value={hectare}
                        onChange={(event) => {setHectares(event.target.value)}}
                    />

                    <label
                        htmlFor="category"
                        className="block text-base font-medium text-gray-700 mt-6"
                    >
                        District :
                    </label>

                    <input
                        type="text"
                        name="district"
                        id="district"
                        autoComplete="given-name"
                        className="mt-2 focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 block w-full shadow-sm sm:text-sm text-gray-600 border-gray-300 rounded-md"
                        value={district}
                        onChange={(event) => {setDistrict(event.target.value)}}
                    />

                    <div className="flex items-center justify-center mt-10">
                        <div className="px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-500 hover:bg-emerald-600 transition-colors cursor-pointer"
                             onClick={handleSubmit}
                        >
                            Edit
                        </div>
                    </div>
        </div>
        </div>
                </div></div>
    )
}