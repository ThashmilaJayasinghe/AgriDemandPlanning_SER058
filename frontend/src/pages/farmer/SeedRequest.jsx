import React from "react";

const SeedRequest = () => {
  return (
    // use a wrapper to wrap all the items at once
    <div className=" mx-4  md:mx-32 lg:mx-52">
      <>
        <div className="my-16">
          <p className="font-semibold text-2xl text-center">Seed Request</p>

          {/* TODO */}
          {/* these to should be dropdowns */}
          <label
            htmlFor="category"
            className="block text-base font-medium text-gray-700 mt-6"
          >
            Category :
          </label>
          <input
            type="text"
            name="category"
            id="category"
            autoComplete="given-name"
            className="mt-2 focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 block w-full shadow-sm sm:text-sm text-gray-600 border-gray-300 rounded-md"
          />
          <label
            htmlFor="type"
            className="block text-base font-medium text-gray-700 mt-6"
          >
            Type :
          </label>
          <input
            type="text"
            name="type"
            id="type"
            autoComplete="given-name"
            className="mt-2 focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 block w-full shadow-sm sm:text-sm text-gray-600 border-gray-300 rounded-md"
          />
          <label
            htmlFor="size"
            className="block text-base font-medium text-gray-700 mt-6"
          >
            Size of land (in Hectares) :
          </label>
          <input
            type="text"
            name="size"
            id="size"
            autoComplete="given-name"
            className="mt-2 focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 block w-full shadow-sm sm:text-sm text-gray-600 border-gray-300 rounded-md"
          />
          <label
            htmlFor="weight"
            className="block text-base font-medium text-gray-700 mt-6"
          >
            Number of Kilograms (Kg) :
          </label>
          <input
            type="text"
            name="weight"
            id="weight"
            autoComplete="given-name"
            className="mt-2 focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 block w-full shadow-sm sm:text-sm text-gray-600 border-gray-300 rounded-md"
          />
          <label
            htmlFor="location"
            className="block text-base font-medium text-gray-700 mt-6"
          >
            Location :
          </label>
          <input
            type="text"
            name="location"
            id="location"
            autoComplete="given-name"
            className="mt-2 focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 block w-full shadow-sm sm:text-sm text-gray-600 border-gray-300 rounded-md"
          />

          <div className="flex items-center justify-center mt-10">
            <div className="px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-500 hover:bg-emerald-600 transition-colors cursor-pointer">
              Submit
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default SeedRequest;
