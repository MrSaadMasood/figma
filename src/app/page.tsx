"use client"
import Image from "next/image";
import { AiOutlineDown, AiOutlineInbox, AiOutlineLogout, AiOutlineNotification, AiOutlineSearch, AiOutlineSetting } from "react-icons/ai";
import { useState } from "react"
export default function Home() {
  
  return (
    <div className=" flex  h-screen bg-white text-black ">

      {/* sidebar */}
      <div className=" w-80 h-full relative  flex flex-col justify-start items-center ">
        <div className=" mt-6 text-black text-5xl font-semibold">Logo</div>
        <div className="w-52 mt-20 h-12 bg-black text-white flex justify-center items-center space-x-2 ">
          <AiOutlineInbox className=" w-6 h-6 " />
          <div>Add Products</div>
        </div>
        {
          Array(7).fill(0).map((item, index) => (
            <SideBarItem key={index} />
          ))
        }
        <div className=" absolute bottom-0  w-full h-24 flex flex-col justify-start items-center  ">
          <div className=" w-[80%] border border-[#eeeeee]"></div>
          <div className=" w-full h-full  flex justify-between items-center px-6">

            <div className="     space-x-2 flex justify-center items-center ">
              <div className="w-10  h-10 relative rounded-full">
                <Image alt="Profile" style={{ objectFit: "cover" }} fill={true} className=" rounded-full " src="/random.jpg" />
              </div>
              <p className=" text-black text-xl font-['Inter']">
                Log out
              </p>
            </div>

            <AiOutlineLogout className=" w-6 h-6 " />
          </div>
        </div>
      </div>

      {/* header */}
      <div className=" w-full h-full flex flex-col justify-center items-center ">

        <div className=" w-full h-24   flex justify-between items-center px-6  ">
          <div className=" flex justify-center items-center  ">
            <div className=" relative w-96 h-12   ">
              <AiOutlineSearch className=" w-6 h-6 absolute top-1/2 left-3 transform -translate-y-1/2 " />
              <input className=" pl-10  w-full h-full font-normal rounded-full text-black text-xl bg-gray-200  " placeholder="Search"
                style={{ backgroundImage: "/search.svg" }}
              />
            </div>
          </div>

          <div className=" w-40 h-10 flex justify-between items-center ">
            <AiOutlineSetting className=" w-6 h-6 " />
            <AiOutlineNotification className=" w-6 h-6" />
            <div className="w-10 h-10 relative rounded-full">
              <Image alt="Profile" style={{ objectFit: "cover" }} fill={true} className=" rounded-full " src="/random.jpg" />
            </div>
          </div>
        </div>

        <div className=" h-full w-full bg-[#fafafa] p-6 flex flex-col justify-start items-center ">
          <div className="  h-[5.5rem] w-full  flex flex-col justify-center items-center ">
            <div className=" w-full  text-start text-black text-3xl font-semibold font-['Archivo'] ">
              Add Products
            </div>
            <div className=" w-full  border-2 border-[#eeeeee]"></div>
          </div>

          {/* card  */}
          <div className=" h-full w-full bg-blue-300 ">

            <div className="w-64 h-60 bg-white shadow" >hello</div>
          </div>
        </div>


      </div>
    </div >

  );
}


function SideBarItem() {
  return (
    <div className="w-48  h-8 mt-4 px-3 flex justify-between items-center  ">
      <div className=" flex justify-center items-center space-x-1 ">
        <AiOutlineInbox className=" w-5 h-5 " />
        <div className=" text-black text-xl font-normal font-['Archivo']">Inventory</div>
      </div>
      <AiOutlineDown />
    </div>
  )
}
