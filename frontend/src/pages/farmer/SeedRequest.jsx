import React, { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { useEffect } from "react";

const staticCategories = [
  {
    id: "7c1a427f-6318-48f9-a256-91b2fd924aab",
    title: "Seeds",
    types: ["Melon", "Pumpkin", "Black papper", "Sunflower"],
  },
  {
    id: "bc022097-96e1-475a-b3dd-09255580036e",
    title: "Rise",
    types: ["Kalu Heenati", "Keeri Samba", "Pachchaperumal", "Suwandal"],
  },
  {
    id: "baf1cf1b-30e7-42d8-a8d3-fb81720a360c",
    title: "Vegitables",
    types: ["Beetroot", "Carrot", "Kohila", "Potato", "Radish", "Lotus root"],
  },
  {
    id: "a1f6d244-3e91-48ef-b104-08b1328607e9",
    title: "Fruits",
    types: ["Mango", "Papaya", "Pineapple", "Avacado", "Banana"],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SeedRequest = () => {
  const [categories, setCategories] = useState(staticCategories);
  const [selectedCategory, setSelectedCategory] = useState(staticCategories[0]);
  const [selectedType, setSelectedType] = useState("Select type . . .");
  const [size, setSize] = useState(0.00);
  const [weight, setWeight] = useState(0.00)
  const [location, setLocation] = useState('')

  useEffect(() => {
    setSelectedType(selectedCategory.types[0]);
  }, [selectedCategory]);

  const handleSubmit = () => {
    console.log(selectedCategory.title, selectedType, size, weight, location)

    // use axios calls and save data in DB

  }

  return (
    // use a wrapper to wrap all the items at once
    <div className=" mx-8  md:mx-32 lg:mx-52">
      <>
        <div className="my-16">
          <p className="font-semibold text-2xl text-center">Seed Request</p>

          <label
            htmlFor="category"
            className="block text-base font-medium text-gray-700 mt-6"
          >
            Category :
          </label>

          {/* dropdown start */}
          <Menu
            as="div"
            className="relative inline-block text-left w-full mt-2"
          >
            <div>
              <Menu.Button className="inline-flex py-2 px-5 border border-gray-300 md:mr-0 md:pr-0 w-full rounded-md text-sm font-medium text-gray-700 active:ring-2 active:ring-emerald-400 active:border-0 focus:ring-2 focus:ring-emerald-400 focus:border-0">
                <div className="text-gray-500 font-normal">
                  {selectedCategory.title}
                </div>
                <ChevronDownIcon
                  color="#a3a3a3"
                  className=" ml-0.5 h-5 w-3 absolute right-6"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-emerald-400 ring-opacity-5 focus:outline-none overflow-visible z-50">
                <div className="py-1">
                  {categories.map((item, idx) => {
                    return (
                      <Menu.Item key={item.id}>
                        {({ active }) => (
                          <a
                            onClick={() => setSelectedCategory(item)}
                            className={classNames(
                              active
                                ? "bg-emerald-50 text-gray-700"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            {item.title}
                          </a>
                        )}
                      </Menu.Item>
                    );
                  })}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          {/* dropdown end */}

          <label
            htmlFor="type"
            className="block text-base font-medium text-gray-700 mt-6"
          >
            Type :
          </label>

          <Menu
            as="div"
            className="relative inline-block text-left w-full mt-2"
          >
            <div>
              <Menu.Button className="inline-flex py-2 px-5 border border-gray-300 md:mr-0 md:pr-0 w-full rounded-md text-sm font-medium text-gray-700 active:ring-2 active:ring-emerald-400 active:border-0 focus:ring-2 focus:ring-emerald-400 focus:border-0">
                <div className="text-gray-500 font-normal">{selectedType}</div>
                <ChevronDownIcon
                  color="#a3a3a3"
                  className=" ml-0.5 h-5 w-3 absolute right-6"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-emerald-400 ring-opacity-5 focus:outline-none overflow-visible z-50">
                <div className="py-1">
                  {selectedCategory.types.map((item, idx) => {
                    return (
                      <Menu.Item key={item}>
                        {({ active }) => (
                          <a
                            onClick={() => setSelectedType(item)}
                            className={classNames(
                              active
                                ? "bg-emerald-50 text-gray-700"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            {item}
                          </a>
                        )}
                      </Menu.Item>
                    );
                  })}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

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
            onChange={(event) => {setSize(event.target.value)}}
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
            onChange={(event) => {setWeight(event.target.value)}}
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
            onChange={(event) => {setLocation(event.target.value)}}
          />

          <div className="flex items-center justify-center mt-10">
            <div className="px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-500 hover:bg-emerald-600 transition-colors cursor-pointer"
              onClick={handleSubmit}
            >
              Submit
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default SeedRequest;
