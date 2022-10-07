import React, {useEffect, useState} from "react";
import axios from "axios";
import storage from "./firebaseConfig.js"
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import {AiFillPlusCircle, AiOutlineEdit} from "react-icons/ai";
import {RiDeleteBin6Line} from "react-icons/ri";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFillCaretLeftFill } from "react-icons/bs";
import {Link} from "react-router-dom";


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
                toast.success("Profile updated successfully !", {
                    position: "top-right",
                    autoClose: 10000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                    // window.location.href = '/farmer/profile';
            })
            .catch(()=>{
                toast.error("Something went wrong!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
    }

    function handleUploadImg() {
        if (!file) {
            alert('Image is not selected')
        }

        const storageRef =  ref(storage, `/Profile/farmer/`+id)
        const uploadTask =  uploadBytesResumable(storageRef, file);

          uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setPercent(percent);

                if(percent === 100) {
                    toast.success("Profile Picture uploaded successfully !", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                // update progress

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

    function deleteUser(id){

        if (window.confirm(`Are you want to delete the profile  ${fullName}`)){
            axios.delete('http://localhost:8000/api/farmers/'+id)
                .then(()=>{
                    alert(`${fullName} user deleted Successfully`)
                    window.location.href = '/'
                })
                .catch((err)=>{
                    alert(err);
                })
        }

    }

    return(
        <div className=" mx-8  md:mx-32 lg:mx-52">
                <div className="my-16">
                    <p className="font-semibold text-2xl text-center">Edit Profile</p>
                    <br/>

                    <Link to={'/farmer/profile'}>
                    <button
                        className="flex min-w-fit bg-gray-400 text-white py-1 px-2 rounded-lg hover:bg-emerald-500 transition-colors"
                    >
                        <BsFillCaretLeftFill className="mt-0 mr-0 md:mt-1 md:mr-1"
                                     size={18}/>
                        Back
                    </button>
                </Link>
                    <div>
                    <center>
                        <img src={imgPreview} alt="Profile Picture"
                                            style={{borderRadius: 10000, width:120, height:120}}/>
                    </center>
                    </div>
                    <br/>

                    <div className="grid grid-cols-3 ">
                    <div className="col-start-2 col-span-20 justify-end flex">
                    <input type="file"
                           // style={{display:'none'}}
                           onChange={handleChange} accept="" />
                    </div>
                    </div>

                    <div className="flex items-center justify-center mt-10" style={{marginTop: 10}}>
                        <div className="px-4 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-500 hover:bg-emerald-600
                        transition-colors cursor-pointer"
                        >
                        {/*<AiFillPlusCircle/>*/}
                    <button id={'upload'} onClick={()=>handleUploadImg()}>Upload Image {percent}%</button>
                        </div>
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
                        Telephone :
                    </label>

                    <input
                        type="text"
                        name="contactNumber"
                        id="contactNumber"
                        autoComplete="given-name"
                        className="mt-2 focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 block w-full shadow-sm sm:text-sm text-gray-600 border-gray-300 rounded-md"
                        value={contactNumber}
                        onChange={(event) => {setTelephone(event.target.value)}}
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






                    <div className="grid grid-cols-5 " style={{marginBottom:40, marginTop:35} }>
                <div className="col-start-1 col-span-2 justify-end flex">
                    <button
                        className="flex min-w-fit bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 transition-colors"
                        onClick={()=>deleteUser(id)}
                    >
                        <RiDeleteBin6Line
                            className="mt-0 mr-0 md:mt-1 md:mr-1"
                            size={18}
                        />
                        <p className="hidden md:block">Delete</p>
                    </button>
                </div>
                <div className="col-span-3 justify-center flex">
                    <button
                        className="flex w-fit text-white bg-green-500 py-1 px-4 rounded-lg hover:bg-green-600 transition-colors"
                        onClick={()=>handleSubmit()}
                    >
                        <AiOutlineEdit
                            className="mt-0 mr-0 md:mt-1 md:mr-1"
                            size={18}
                        />
                        <p className="hidden md:block"> Update</p>
                    </button>
                </div>
            </div>

        </div>
        </div>
    )
}