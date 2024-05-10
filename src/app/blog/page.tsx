"use client";
import { useState } from "react";
import Cta from "@/components/layout/Cta/Cta";
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";

const Blog = () => {
  
  return (
    <div className="bg-gray-bg">
      <Header />
      <div className="lg:w-[1140px] mx-auto h-auto font-custom-font flex flex-col">
        <div className="flex flex-col gap-[120px] justify-center lg:items-start items-center mb-10 mt-[80px]">
          <h1 className="lg:w-[689px] lg:text-6xl text-3xl font-bold">
            News and insights 
            <span className="text-gray-darked"> from our experts</span>
          </h1>
          <div className="lg:w-[689px]">
            <ul className="flex gap-[60px] justify-start ">
                <li className=" text-gray-darked lg:text-lg pb-7 text-base hover:cursor-pointer hover:text-black-tx hover:font-bold hover:border-b-2 hover:border-green-tx">All Articles</li>
                <li className=" text-gray-darked lg:text-lg pb-7 text-base hover:cursor-pointer  hover:text-black-tx hover:font-bold hover:border-b-2 hover:border-green-tx">Sales</li>
                <li className=" text-gray-darked lg:text-lg pb-7 text-base hover:cursor-pointer hover:text-black-tx hover:font-bold hover:border-b-2 hover:border-green-tx">Marketing</li>
                <li className=" text-gray-darked lg:text-lg pb-7 text-base hover:cursor-pointer hover:text-black-tx hover:font-bold hover:border-b-2 hover:border-green-tx">Service</li>
                <li className=" text-gray-darked lg:text-lg pb-7 text-base hover:cursor-pointer hover:text-black-tx hover:font-bold hover:border-b-2 hover:border-green-tx">Product</li>
                <li className=" text-gray-darked lg:text-lg pb-7 text-base hover:cursor-pointer hover:text-black-tx hover:font-bold hover:border-b-2 hover:border-green-tx">News</li>
            </ul>
          </div>
        </div>
        
      </div>
      
      <Cta />
      <Footer />
    </div>
  );
};

export default Blog;