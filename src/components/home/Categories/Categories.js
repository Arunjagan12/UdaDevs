import React from "react";

import {
    html,
    java,
    jquery,
    mongodb,
    python,
    react,
    sass,
} from "../../../assets/images/index";

const Categories = () => {
    return (
        <div className="container mx-auto mt-12 justify-center">
        <h2 className="font-extra my-5">Browse Categories</h2>

        <div className="flex flex-row gap-2 items-center text-center flex-wrap pl-4 md:pl-0">

            <div
                className="transition basis-[45%] md:basis-[10.93%] bg-[#FEF9EC] cursor-pointer rounded mr-3 p-5 hover:opacity-75 group hover:-translate-y-2">
                <div className="bg-white rounded-full m-0 mx-auto w-20 h-20 p-2.5 scale-90 group-hover:scale-125">
                    <img src={html} alt="" className="w-16 h-16" />
                </div>
                <h4 className="mt-4 mb-2 font-medium">
                    HTML
                </h4>
                <p className="text-gray-500 text-xs">
                    30 Courses
                </p>
            </div> 

            <div
                className="transition basis-[45%] md:basis-[10.93%] bg-[#E4F4FB] cursor-pointer rounded mr-3 p-5 hover:opacity-75 group hover:-translate-y-2">
                <div className="bg-white rounded-full m-0 mx-auto w-20 h-20 p-2.5 scale-90 group-hover:scale-125">
                    <img src={jquery} alt="" className="w-16 h-16" />
                </div>
                <h4 className="mt-4 mb-2 font-medium">
                    JQuery
                </h4>
                <p className="text-gray-500 text-xs">
                    32 Courses
                </p>
            </div> 

            <div
                className="transition basis-[45%] md:basis-[10.93%] bg-[#E4F4FB] cursor-pointer rounded mr-3 p-5 hover:opacity-75 group hover:-translate-y-2">
                <div className="bg-white rounded-full m-0 mx-auto w-20 h-20 p-2.5 scale-90 group-hover:scale-125">
                    <img src={sass} alt="" className="w-16 h-16" />
                </div>
                <h4 className="mt-4 mb-2 font-medium">
                    Sass
                </h4>
                <p className="text-gray-500 text-xs">
                    32 Courses
                </p>
            </div> 

            <div
                className="transition basis-[45%] md:basis-[10.93%] bg-[#FCF1EB] cursor-pointer rounded mr-3 p-5 hover:opacity-75 group hover:-translate-y-2">
                <div className="bg-white rounded-full m-0 mx-auto w-20 h-20 p-2.5 scale-90 group-hover:scale-125">
                    <img src={react} alt="" className="w-16 h-16" />
                </div>
                <h4 className="mt-4 mb-2 font-medium">
                    React
                </h4>
                <p className="text-gray-500 text-xs">
                    32 Courses
                </p>
            </div>

            <div
                className="transition basis-[45%] md:basis-[10.93%] bg-[#FEF9EC] cursor-pointer rounded mr-3 p-5 hover:opacity-75 group hover:-translate-y-2">
                <div className="bg-white rounded-full m-0 mx-auto w-20 h-20 p-2.5 scale-90 group-hover:scale-125">
                    <img src={java} alt="" className="w-16 h-16" />
                </div>
                <h4 className="mt-4 mb-2 font-medium">
                    Java
                </h4>
                <p className="text-gray-500 text-xs">
                    32 Courses
                </p>
            </div> 

            <div
                className="transition basis-[45%] md:basis-[10.93%] bg-[#E4F4FB] cursor-pointer rounded mr-3 p-5 hover:opacity-75 group hover:-translate-y-2">
                <div className="bg-white rounded-full m-0 mx-auto w-20 h-20 p-2.5 scale-90 group-hover:scale-125">
                    <img src={python} alt="" className="w-16 h-16" />
                </div>
                <h4 className="mt-4 mb-2 font-medium">
                    Python
                </h4>
                <p className="text-gray-500 text-xs">
                    32 Courses
                </p>
            </div> 

            <div
                className="transition basis-[45%] md:basis-[10.93%] bg-[#FCF1EB] cursor-pointer rounded mr-3 p-5 hover:opacity-75 group hover:-translate-y-2">
                <div className="bg-white rounded-full m-0 mx-auto w-20 h-20 p-2.5 scale-90 group-hover:scale-125">
                    <img src={mongodb} alt="" className="w-16 h-16" />
                </div>
                <h4 className="mt-4 mb-2 font-medium">
                    MongoDB
                </h4>
                <p className="text-gray-500 text-xs">
                    32 Courses
                </p>
            </div> 

        </div>
    </div>
    );
};

export default Categories;