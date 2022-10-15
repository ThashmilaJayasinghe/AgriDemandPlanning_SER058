import React from 'react'

export default function SuggestionTitle(props) {

    const {suggestions} = props;

    return (
        <>
            {suggestions.map((suggestion) => (
                <div key={suggestion._id} className="max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 mb-3">
                    <div className="w-0 flex-1 p-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 pt-0.5">
                                {suggestion.status === 'unread' ? (
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                        alt=""
                                    />
                                ) : (
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                        alt=""
                                    />
                                )}
                            </div>
                            <div className="ml-3 w-0 flex-1">
                                <p className="ml-3 mt-3 text-sm font-medium text-gray-900">{suggestion.subject}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex border-l border-gray-200">
                        <button
                            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            onClick={() => {
                                // setShow(false)
                            }}
                        >
                            Reply
                        </button>
                    </div>
                </div>
            ))}
        </>
    )
}
