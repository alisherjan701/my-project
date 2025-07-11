import React, { useState } from "react";

const Card1 = () => {
  const [activeTab, setActiveTab] = useState("Sale");

  const tabs = ["Sale", "Hot", "New Arrivals", "Accessories"];

  const tabContent = {
    Sale: "Great discounts on selected items. Limited time offer!",
    Hot: "The best-selling clothes are those that are on trend and at affordable prices. People are very interested in them.",
    "New Arrivals": "Check out the latest additions to our collection.",
    Accessories: "Complete your outfit with our stylish accessories.",
  };
  return (
    <>
      <div className="p-4 ml-200">
        <h1 className="flex gap-10 items-center text-lg mb-4">
          {tabs.map((tab) => (
            <p
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer transition-colors ${
                activeTab === tab
                  ? "text-emerald-600 font-bold"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </p>
          ))}
        </h1>

        <div className="text-gray-700 text-base max-w-xl">
          {tabContent[activeTab]}
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-6  my-8">
        <div className="relative flex flex-col rounded-2xl bg-white h-[600px]  max-w-xs w-full shadow-2xl toggle">
          <div className="relative overflow-hidden rounded-2xl bg-transparent">
            <img
              src="https://i.pinimg.com/236x/28/bf/9c/28bf9cb0cc6fa17e21499427a77d8c5b.jpg"
              alt="ui/ux review check"
              className="w-[95%] rounded-2xl mx-auto mt-4 h-[300px] object-cover"
            />
          </div>
          <div className="p-6">
            <h4 className="text-2xl font-semibold text-blue-gray-900">
              Lorem ipsum dolor sit amet consectetur
            </h4>
            <p className="mt-3 text-xl text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center space-x-3">
              <img
                alt="natali craig"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                className="h-9 w-9 rounded-full border-2 border-white object-cover"
              />
              <img
                alt="tania andrew"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                className="h-9 w-9 rounded-full border-2 border-white object-cover"
              />
            </div>
            <p className="text-base text-gray-500"></p>
          </div>
        </div>

        <div className="relative flex flex-col rounded-2xl bg-white shadow-2xl toggle max-w-xs w-full">
          <div className="relative overflow-hidden rounded-2xl bg-transparent">
            <img
              src="https://i.pinimg.com/236x/9f/a9/83/9fa983de5d9a85814abfc7a25ebb4228.jpg"
              alt="ui/ux review check"
              className="w-[95%] rounded-2xl mx-auto mt-4 h-[300px] object-cover"
            />
          </div>
          <div className="p-6">
            <h4 className="text-2xl font-semibold text-blue-gray-900">
              Lorem ipsum dolor sit amet consectetur
            </h4>
            <p className="mt-3 text-xl text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center space-x-3">
              <img
                alt="natali craig"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                className="h-9 w-9 rounded-full border-2 border-white object-cover"
              />
              <img
                alt="tania andrew"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                className="h-9 w-9 rounded-full border-2 border-white object-cover"
              />
            </div>
            <p className="text-base text-gray-500"></p>
          </div>
        </div>

        <div className="relative flex flex-col rounded-2xl bg-white shadow-2xl toggle max-w-xs w-full">
          <div className="relative overflow-hidden rounded-2xl bg-transparent">
            <img
              src="https://i.pinimg.com/236x/de/b9/89/deb989f16066629fe22141c4e4147004.jpg"
              alt="ui/ux review check"
              className="w-[95%] rounded-2xl mx-auto mt-4 h-[300px] object-cover"
            />
          </div>
          <div className="p-6">
            <h4 className="text-2xl font-semibold text-blue-gray-900">
              Lorem ipsum dolor sit amet consectetur
            </h4>
            <p className="mt-3 text-xl text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center space-x-3">
              <img
                alt="natali craig"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                className="h-9 w-9 rounded-full border-2 border-white object-cover"
              />
              <img
                alt="tania andrew"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                className="h-9 w-9 rounded-full border-2 border-white object-cover"
              />
            </div>
            <p className="text-base text-gray-500"></p>
          </div>
        </div>

        <div className="relative flex flex-col rounded-2xl bg-white shadow-2xl toggle max-w-xs w-full">
          <div className="relative overflow-hidden rounded-2xl bg-transparent">
            <img
              src="https://i.pinimg.com/236x/0a/59/30/0a593009923c02ae338a6088aa11c373.jpg"
              alt="ui/ux review check"
              className="w-[95%] rounded-2xl mx-auto mt-4 h-[300px] object-cover"
            />
          </div>
          <div className="p-6">
            <h4 className="text-2xl font-semibold text-blue-gray-900">
              Lorem ipsum dolor sit amet consectetur
            </h4>
            <p className="mt-3 text-xl text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center space-x-3">
              <img
                alt="natali craig"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                className="h-9 w-9 rounded-full border-2 border-white object-cover"
              />
              <img
                alt="tania andrew"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                className="h-9 w-9 rounded-full border-2 border-white object-cover"
              />
            </div>
            <p className="text-base text-gray-500"></p>
          </div>
        </div>

        <div className="relative flex flex-col rounded-2xl bg-white shadow-2xl toggle  max-w-xs w-full">
          <div className="relative overflow-hidden rounded-2xl bg-transparent">
            <img
              src="https://i.pinimg.com/236x/6c/26/91/6c26911b72c139ad58c95ffe8778d5cf.jpg"
              alt="ui/ux review check"
              className="w-[95%] rounded-2xl mx-auto mt-4 h-[300px] object-cover"
            />
          </div>
          <div className="p-6">
            <h4 className="text-2xl font-semibold text-blue-gray-900"></h4>
            <p className="mt-3 text-xl text-gray-700">
              Because it's about motivating the doers. Because I'm here to
              follow my dreams and inspire others.
            </p>
          </div>
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center space-x-3">
              <img
                alt="natali craig"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                className="h-9 w-9 rounded-full border-2 border-white object-cover"
              />
              <img
                alt="tania andrew"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                className="h-9 w-9 rounded-full border-2 border-white object-cover"
              />
            </div>
            <p className="text-base text-gray-500"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card1;
