import React from "react";
import MyRequestsWrapper from "../../components/wrappers/farmer/MyRequestsWrapper";

export default function FarmerHome(){
    return(
        <div>
            <div
                style={{
                    borderRadius: "80px",
                    margin: "40px 450px 20px 450px",
                    padding: "",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                }}
            >
                <div style={{paddingInline: "3rem", paddingTop: "3rem", paddingBottom: "3rem"}}>
                    <p className="font-semibold text-2xl text-center"> Welcome Mr.Ranil Wijethunga</p>
                    <p className="font-semibold text-1xl text-center"> You have 5 hectares</p>
                </div>
            </div>

            <p className="font-semibold text-3xl text-center text-red-700"><u> Announcements</u></p>

            <MyRequestsWrapper>
            <div

                className="bg-emerald-100 shadow overflow-hidden sm:rounded-md my-4"
            >
                <div className="block">
                    <div className="px-4 py-4 sm:px-6">
                        <div className="mt-2 grid grid-cols-5">
                            <p className="flex col-span-1 items-center text-m text-black">
                                You can do your request now.
                            </p>

                        </div>
                        <div className="mt-2 grid grid-cols-1">

                            <p className="flex col-span-1 items-center text-m text-gray-500">
                                You have to submit your last year sales details about rice.
                                Give us your real data for us.
                            </p>
                        </div>
                        <div className="mt-2 grid grid-cols-1">

                            <p className="flex col-span-1 items-center text-sm text-gray-500">
                                9/7/2022
                            </p>
                        </div>

                    </div>
                </div>
            </div>

                <div

                    className="bg-emerald-100 shadow overflow-hidden sm:rounded-md my-4"
                >
                    <div className="block">
                        <div className="px-4 py-4 sm:px-6">
                            <div className="mt-2 grid grid-cols-5">
                                <p className="flex col-span-1 items-center text-m text-black">
                                    Please add your seeds demand.
                                </p>

                            </div>
                            <div className="mt-2 grid grid-cols-1">

                                <p className="flex col-span-1 items-center text-m text-gray-500">
                                   The seed demands application open now. You can give your seed demands for us.
                                   Please,  Give us your real data for us.
                                </p>
                            </div>
                            <div className="mt-2 grid grid-cols-1">

                                <p className="flex col-span-1 items-center text-sm text-gray-500">
                                    5/7/2022
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </MyRequestsWrapper>
                </div>
    )
}