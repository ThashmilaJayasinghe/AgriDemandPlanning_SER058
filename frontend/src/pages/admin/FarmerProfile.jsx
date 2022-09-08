import {useEffect, useState} from "react";

export default function FarmerProfile() {

    const [farmer, setFarmer] = useState({});

    useEffect(() => {
        // setFarmer(localStorage.getItem('Farmer'));
        setFarmer(JSON.parse(localStorage.getItem('Farmer')));
        console.log(farmer);
    }, []);

    return <>
        <h1>Farmer Profile</h1>
        <h3>Name: {farmer.fullName}</h3>
    </>
}