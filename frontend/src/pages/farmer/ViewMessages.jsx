import React, {useState} from "react";
import SuggestionTitle from '../../components/recieveSuggestions/suggestionTitle'
import SuggestionDetails from '../../components/recieveSuggestions/suggestionDetails'
import { getSuggestions } from '../../api/MessageAPI';
import {useEffect} from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function ViewMessages() {

    const [suggestions, setSuggestions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [id, setId] = useState('630e177910470806f04c70ad');

    useEffect(() => {
        async function viewSuggestions() {
            await getSuggestions(id, setSuggestions).then(() => {
                console.log('Suggestions retrieved successfully');
                setIsLoading(false);
            });
        }
        viewSuggestions();

    }, []);

    if(isLoading) {
        return (
            <div>
                <div className="flex justify-center mt-24">
                    <CircularProgress color="success" />
                </div>
            </div>
        )
    }

    return (
        <>
            {/* 2 column wrapper */}
            <div className="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
                {/* Main wrapper */}
                <div className="flex-1 min-w-0 bg-white xl:flex">
                    <div className="border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-80 xl:border-r xl:border-gray-200 bg-white">
                        <div className="h-full pl-4 pr-6 pt-6 sm:pl-6 lg:pl-8 xl:pl-0">
                            {/* Start left column area */}
                            <div className="h-full relative" style={{ minHeight: '12rem' }}>
                                <SuggestionTitle suggestions={suggestions}/>
                                {/*<div className="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg" />*/}
                            </div>
                            {/* End left column area */}
                        </div>
                    </div>

                    <div className="bg-white lg:min-w-0 lg:flex-1">
                        <div className="h-full pt-6 px-4 sm:px-6 lg:px-8">
                            {/* Start main area*/}
                            <div className="relative h-full" style={{ minHeight: '36rem' }}>
                                <div className="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg" />
                                <SuggestionDetails />
                            </div>
                            {/* End main area */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}