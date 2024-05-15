"use client";
import { useState } from "react";
import Cta from "@/components/layout/Cta/Cta";
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import Map from "@/components/layout/Map/Map";
import Clients from "@/components/layout/Hero/Clients";

const Contact = () => {
  return (
    <div>
      <div className="bg-gray-bg">
        <Header />
      </div>
      <div className=" bg-gray-bg pt-[80px] pb-[70px]">
        <div className="lg:w-[1140px] mx-auto bg-gray-bg">
          <h2 className="lg:w-[555px] lg:h-[148px] lg:text-6xl text-3xl font-bold">
            Get in touch with our lovely team
          </h2>
          <div className="lg:w-full mx-auto flex lg:flex-row flex-col gap-10">
            <div className="lg:w-[555px] lg:h-[462px]">
              <p className="font-bold lg:text-lg text-base">
                Roooby Technologies
              </p>
              <p className="lg:text-lg text-base text-gray-darked pb-5">
                Plovdiv, Bulgaria, bul Vasil Levski 96
              </p>
              <img src="./assets/map.png" />
              <div className="flex justify-between pt-5">
                <div className="border-l-2 border-gray-darked pl-2">
                  <p className="font-bold lg:text-lg text-base">General</p>
                  <p className="lg:text-lg text-base text-gray-darked">
                    hello@me.com
                  </p>
                </div>
                <div className="border-l-2 border-gray-darked pl-2">
                  <p className="font-bold lg:text-lg text-base">Support</p>
                  <p className="lg:text-lg text-base text-gray-darked">
                    support@me.com
                  </p>
                </div>
              </div>
            </div>
            <div className="flex ">
              <form className="lg:w-[555px] p-8">
                <div className="mb-4">
                  <input
                    class="w-full bg-white-text text-gray-darked rounded-md py-2 px-4 h-[60px]"
                    id="field1"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="w-full bg-white-text text-gray-darked rounded-md py-2 px-4 h-[60px]"
                    id="field2"
                    type="text"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="w-full bg-white-text text-gray-darked rounded-md py-2 px-4 h-[180px] placeholder-top-0"
                    id="field3"
                    type="text"
                    placeholder="Message"
                  />
                </div>
                <button
                  className="lg:text-lg text-sm bg-green-tx text-white-text py-2 px-4 rounded-md"
                  type="submit"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Clients/>
      <div className="pb-[100px]"></div>
      <Footer />
    </div>
  );
};

export default Contact;
