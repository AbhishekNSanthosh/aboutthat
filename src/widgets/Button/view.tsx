"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Button() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col relative inset-0">
      {!isLoaded && (
        <div className="fixed inset-0 z-20 bg-white flex items-center justify-center">
          <div className="text-white">
            <div className="flex items-center justify-center flex-col gap-4 px-[5vw]">
              <Image
                className="w-[20rem] mt-[-13px] mr-2"
                src={"/about.svg"}
                alt="0"
                width={100}
                height={100}
              />{" "}
            </div>
          </div>
        </div>
      )}
      <div className="bg-white w-full fixed z-10 top-0 h-[11vh] px-[10vw] flex items-center">
        <Image
          className="w-[10rem] mt-[-13px] mr-2"
          src={"/about.svg"}
          alt="0"
          width={100}
          height={100}
        />{" "}
      </div>
      <div className="mt-[100px] w-full items-center justify-center flex flex-col">
        <div className="w-[90vw] lg:w-[50vw] bg-white p-6 rounded-md">
          <div className="w-full flex items-center justify-center py-4">
            <Image
              className="w-[25rem] mt-[-13px] mr-2"
              src={"/payment.svg"}
              alt="0"
              width={100}
              height={100}
            />{" "}
          </div>
          <div className="">
            <span className="">
              The truth is like a shadow—always there, even when you try to hide
              it. The price of secrets is steep, and the final cost is paid in
              full. The answer lies where it all began: who would gain the most
              from keeping it hidden?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
