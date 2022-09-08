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

    useEffect(()=>{
        setID(localStorage.getItem('id'))
        setName(localStorage.getItem('fullName'))
        setAddress(localStorage.getItem('address'))
        setNIC(localStorage.getItem('NIC'))
        setTelephone(localStorage.getItem('contactNumber'))
        setHectares(localStorage.getItem('hectare'))
        setDistrict(localStorage.getItem('district'))
    },[])

    const handleSubmit = (event)=>{

        console.log('function called')
        const updateProfile = {
            fullName,
            address,
            NIC,
            contactNumber,
            hectare,
            district
        }
        axios.put('http://localhost:8000/api/farmers/'+id, updateProfile)
            .then(()=>{
                alert('Success')
                window.location.href='/farmer/profile';
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
    //
    // state = {
    //     selectedFile : null
    // }
    //
    // const fileHandler = (event) =>{
    //     console.log(event.target.files[0])
    //     this.setState({
    //         selectedFile : event.target.files[0]
    //     })
    // }
    //
    //
    // const fileUploadHandler = ()=>{
    //
    // }

    function handleUpload() {
        if (!file) {
            alert("Please choose a file first!")
        }

        const storageRef = ref(storage, `/files/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file);

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
                    console.log(url);
                });
            }
        );
    }

    // Handle file upload event and update state
    function handleChange(event) {
        setFile(event.target.files[0]);
    }

    return(
        <div className=" mx-8  md:mx-32 lg:mx-52">

                <div className="my-16">
                    <p className="font-semibold text-2xl text-center">Edit Profile</p>

                    <label
                        htmlFor="category"
                        className="block text-base font-medium text-gray-700 mt-6"
                    >
                        Name :
                    </label>

                    {/*<input type={'file'} onChange={fileHandler}/>*/}
                    {/*<button onClick={fileUploadHandler}>Upload</button>*/}

                    <input type="file" onChange={handleChange} accept="" />
                    <button onClick={handleUpload}>Upload to Firebase</button>
                    <p>{percent} "% done"</p>

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
    )
}