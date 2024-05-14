"use client";
import { useState } from "react";
import Cta from "@/components/layout/Cta/Cta";
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";

const Contact = () => {
  return (
    <div>
        <div className="bg-gray-bg">
      <Header />
      </div>
      <div className="w-full bg-gray-bg pt-[80px]">
      <div className="bg-gray-bg">
    <h2 className="lg:w-[555px] lg:h-[148px] lg:text-6xl text-3xl font-bold">Get in touch with our lovely team</h2>
    <div className="lg:w-[1140px] mx-auto flex lg:flex-row flex-col gap-10">
        <div className="lg:w-[555px] lg:h-[462px]">
            <p className="font-bold lg:text-lg text-base">Roooby Technologies</p>
            <p className="lg:text-lg text-base text-gray-darked pb-5">Plovdiv, Bulgaria, bul Vasil Levski 96</p>
            <img src="" />
            <div className="flex justify-between pt-5">
                <div className="border-l-2 border-gray-darked pl-2">
                    <p className="font-bold lg:text-lg text-base">General</p>
                    <p className="lg:text-lg text-base text-gray-darked">hello@me.com</p>
                </div>
                <div className="border-l-2 border-gray-darked pl-2">
                    <p className="font-bold lg:text-lg text-base">Support</p>
                    <p className="lg:text-lg text-base text-gray-darked">support@me.com</p>
                </div>
            </div>
        </div>
        <div className="flex ">
            <form className="lg:w-[555px] p-8 shadow-lg">
                <div className="mb-4">
                    <input class="w-full bg-white-text text-gray-darked border-2 rounded-md py-2 px-4 focus:outline-none focus:bg-white focus:border-blue-500" id="field1" type="text" placeholder="Your name" />
                </div>
                <div className="mb-4">
                    <input className="w-full bg-white-text text-gray-darked border-2 rounded-md py-2 px-4 focus:outline-none focus:bg-white focus:border-blue-500" id="field2" type="text" placeholder="Your name" />
                </div>
                <div className="mb-4">
                    <input className="w-full bg-white-text text-gray-darked border-2 rounded-md py-2 px-4 h-16 focus:outline-none focus:bg-white focus:border-blue-500" id="field3" type="text" placeholder="Your name" />
                </div>
                <button className="bg-green text-white py-2 px-4 rounded-md hover:bg-blue-600" type="submit">Send message</button>
            </form>
        </div>
    </div>
</div>


      </div>

      <Cta />
      <Footer />
    </div>
  );
};

export default Contact;