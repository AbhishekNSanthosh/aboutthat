"use client";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoIosMore } from "react-icons/io";
import { MdSend } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  const [isLocked, setIsLocked] = useState<boolean>(true);
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [thirdInput, setThirdInput] = useState("");
  const [fourthtInput, setFourthInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [status, setStatus] = useState<number[]>([]);
  const [showPayment, setShowPayment] = useState(false);
  const [call, setCall] = useState(false);

  useEffect(() => {
    // Ensure localStorage is accessed only in the browser
    if (typeof window !== "undefined") {
      const savedStatus = localStorage.getItem("status");
      if (savedStatus) {
        setStatus(JSON.parse(savedStatus));
      }
    }
    setCall(false);
  }, [call]);

  console.log("live ", status.length);

  const handleFirst = () => {
    const input = firstInput.toLowerCase();
    if (input === "olivia") {
      setIsModalOpen(true);
      setModalMessage("Well done! You’re peeling back the layers. Keep going.");
      if (!status.includes(1)) {
        const updatedStatus = [...status, 1];
        if (typeof window !== "undefined") {
          localStorage.setItem("status", JSON.stringify(updatedStatus)); // Persist to localStorage
        }
      }
    }
    setCall(true);
  };
  const handleSecond = () => {
    const input = secondInput.toLowerCase();
    if (input === "chloe") {
      setIsModalOpen(true);
      setModalMessage("Sharp thinking! The truth is starting to emerge.");
      if (!status.includes(2)) {
        const updatedStatus = [...status, 2];
        localStorage.setItem("status", JSON.stringify(updatedStatus));
      }
    }
    setCall(true);
  };
  const handleThird = () => {
    const input = thirdInput.toLowerCase();
    if (input === "nate") {
      setIsModalOpen(true);
      setModalMessage(
        "Great work! The puzzle’s pieces are falling into place."
      );
      if (!status.includes(3)) {
        const updatedStatus = [...status, 3];
        localStorage.setItem("status", JSON.stringify(updatedStatus));
      }
    }
    setCall(true);
  };
  const handleFourth = () => {
    const input = fourthtInput.toLowerCase();
    if (input === "dan stop") {
      setShowPayment(true);
      setIsModalOpen(true);
      setModalMessage(
        "Impressive! The shadows are lifting, and the truth is near."
      );
      if (!status.includes(4)) {
        const updatedStatus = [...status, 4];
        localStorage.setItem("status", JSON.stringify(updatedStatus));
      }
    }
    setCall(true);
  };

  useEffect(() => {
    // setStatus(JSON.parse(statusObj));
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset scroll behavior
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (status.length === 3 || status.length > 3) {
      setIsLocked(false);
      console.log("lentght", status.length);
    }
  }, [call]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col relative inset-0 top-[-10px]">
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
      <div className="h-full flex flex-col items-center justify-center mt-[100px] px-[10vw] space-y-5">
        <div className="w-[90vw] lg:w-[50vw] bg-white p-[2vw] rounded-[8px] space-y-3">
          <div className="w-full items-center justify-center flex pt-5">
            <Image
              className="w-[20rem]"
              src={"/profile.png"}
              alt="0"
              width={1000}
              height={1000}
            />
          </div>
          <div className="w-full flex flex-col items-center justify-center space-y-2">
            <span className="text-xl font-semibold">AboutThat</span>
            <span className="text-sm font-normal text-gray-500">
              @AboutThat
            </span>
          </div>
          <div className="w-full flex items-center justify-center py-2 space-x-5">
            <div className="flex flex-col items-center justify-center">
              <span className="">1024</span>
              <span className="text-xs text-gray-500">Followers</span>
            </div>
            <div className="h-[5vh] w-[0.5px] bg-gray-400"></div>
            <div className="flex flex-col items-center justify-center">
              <span className="">75</span>
              <span className="text-xs text-gray-500">Tells</span>
            </div>
            <div className="h-[5vh] w-[.5px] bg-gray-400"></div>
            <div className="flex flex-col items-center justify-center">
              <span className="">512</span>
              <span className="text-xs text-gray-500">Followings</span>
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <button className=" border rounded-full px-4 py-1 border-[#ff9da8] text-[#cb0531] ">
              Follow
            </button>
          </div>
          <div className="w-full flex items-center justify-center pt-5">
            <textarea
              name=""
              id=""
              className="w-full bg-[#ff9da8] placeholder:text-sm placeholder:text-gray-700 bg-opacity-5 rounded-[10px] outline-none border-none p-3 place"
              placeholder="What's brewing?☕"
              rows={5}
            ></textarea>
          </div>
        </div>

        <div className=" bg-white w-[90vw] lg:w-[50vw] p-6 rounded-[10px] flex flex-col space-y-4">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-5">
              <Image
                className="w-[50px] rounded-md"
                src={"/about.png"}
                alt="0"
                width={1000}
                height={1000}
              />
              <div className="flex flex-col items-start">
                <span className="font-semibold text-base">AboutThat</span>
                <span className="text-xs font-normal text-gray-500">
                  7 days ago
                </span>
              </div>
            </div>
            <div className="">
              <IoIosMore className="text-2xl" />
            </div>
          </div>
          <div className="">
            <div className="flex flex-col space-y-3">
              <Image
                className="w-auto"
                src={"/que.png"}
                alt="0"
                width={2000}
                height={2000}
              />
              <span className="">
                Success often hides behind closed doors. Some forces push harder
                than others. What happens when the light finally reveals the
                shadow?
              </span>
              {status.length < 3 ? (
                <div className="flex w-full flex-row items-center space-x-2">
                  <button className="bg-[#cb0531] text-[#cb0531] bg-opacity-10 w-full p-3 rounded-lg flex flex-row items-center justify-center gap-2 font-semibold">
                    <FaLock className="mt-[-2px]" />
                    Locked
                  </button>
                  <div className="">
                    <FaQuestionCircle
                      title="Kindly solve the rest"
                      className="text-2xl cursor-pointer text-[#cb0531]"
                    />
                  </div>
                </div>
              ) : (
                <>
                  {status?.includes(4) ? (
                    <div className="flex w-full flex-row items-center space-x-3 pt-2">
                      <button
                        disabled
                        className="w-full cursor-not-allowed p-3 bg-[#cb0531] text-white rounded-[10px]"
                      >
                        Solved
                      </button>
                    </div>
                  ) : (
                    <div className="flex w-full flex-row items-center space-x-3 pt-2">
                      <div className="w-full">
                        <input
                          type="text"
                          onChange={(e) => {
                            setFourthInput(e.target.value);
                          }}
                          placeholder="Answer"
                          className="w-full bg-[#ff9da8] bg-opacity-5 p-3 rounded-lg outline-none border-none"
                        />
                      </div>
                      <div className="">
                        <MdSend
                          className="text-2xl cursor-pointer"
                          onClick={() => {
                            handleFourth();
                          }}
                        />
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        <div className=" bg-white w-[90vw] lg:w-[50vw] p-6 rounded-[10px] flex flex-col space-y-4">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-5">
              <Image
                className="w-[50px] rounded-md"
                src={"/about.png"}
                alt="0"
                width={1000}
                height={1000}
              />
              <div className="flex flex-col items-start">
                <span className="font-semibold text-base">AboutThat</span>
                <span className="text-xs font-normal text-gray-500">
                  9 days ago
                </span>
              </div>
            </div>
            <div className="">
              <IoIosMore className="text-2xl" />
            </div>
          </div>
          <div className="">
            <div className="flex flex-col space-y-3">
              <span className="">
                Not all trades are legal, but survival can blur the lines. The
                exchange is never in full sight, but those involved know its
                true cost. A life not just taken, but traded. What’s the price
                for survival?
              </span>
              <span className="">
                KEY: "I thrive in the shadows, and my trade is worth more than
                gold. You can’t escape my grip, but you can’t live without me.
                Who am I?"
              </span>
              <div className="flex flex-row items-center space-x-3 text-gray-800">
                <span className="">Cipher Text: qrnk</span>
                <span className="">Key: DRUGS</span>
              </div>
              {status?.includes(3) ? (
                <div className="flex w-full flex-row items-center space-x-3 pt-2">
                  <button
                    disabled
                    className="w-full cursor-not-allowed p-3 bg-[#cb0531] text-white rounded-[10px]"
                  >
                    Solved
                  </button>
                </div>
              ) : (
                <div className="flex w-full flex-row items-center space-x-3 pt-2">
                  <div className="w-full">
                    <input
                      type="text"
                      onChange={(e) => {
                        setThirdInput(e.target.value);
                      }}
                      placeholder="Answer"
                      className="w-full bg-[#ff9da8] bg-opacity-5 p-3 rounded-lg outline-none border-none"
                    />
                  </div>
                  <div className="">
                    <MdSend
                      onClick={() => {
                        handleThird();
                      }}
                      className="text-2xl cursor-pointer"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className=" bg-white w-[90vw] lg:w-[50vw] p-6 rounded-[10px] flex flex-col space-y-4">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-5">
              <Image
                className="w-[50px] rounded-md"
                src={"/about.png"}
                alt="0"
                width={1000}
                height={1000}
              />
              <div className="flex flex-col items-start">
                <span className="font-semibold text-base">AboutThat</span>
                <span className="text-xs font-normal text-gray-500">
                  10 days ago
                </span>
              </div>
            </div>
            <div className="">
              <IoIosMore className="text-2xl" />
            </div>
          </div>
          <div className="">
            <div className="flex flex-col space-y-3">
              <span className="">
                Vanity is the mask of insecurity. Behind the lens lies the
                truth. Use the key 'INFLUENCE' to reveal the name hidden in the
                code below:
              </span>
              <div className="flex flex-row items-center space-x-3 text-gray-800">
                <span className="">Cipher Text: kptw</span>
                <span className="">Key: IMPOSTER</span>
              </div>
              {status?.includes(2) ? (
                <div className="flex w-full flex-row items-center space-x-3 pt-2">
                  <button
                    disabled
                    className="w-full cursor-not-allowed p-3 bg-[#cb0531] text-white rounded-[10px]"
                  >
                    Solved
                  </button>
                </div>
              ) : (
                <div className="flex w-full flex-row items-center space-x-3 pt-2">
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="Answer"
                      onChange={(e) => {
                        setSecondInput(e.target.value);
                      }}
                      className="w-full bg-[#ff9da8] bg-opacity-5 p-3 rounded-lg outline-none border-none"
                    />
                  </div>
                  <div className="">
                    <MdSend
                      onClick={() => {
                        handleSecond();
                      }}
                      className="text-2xl cursor-pointer"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className=" bg-white w-[90vw] lg:w-[50vw] p-6 rounded-[10px] flex flex-col space-y-4">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-5">
              <Image
                className="w-[50px] rounded-md"
                src={"/about.png"}
                alt="0"
                width={1000}
                height={1000}
              />
              <div className="flex flex-col items-start">
                <span className="font-semibold text-base">AboutThat</span>
                <span className="text-xs font-normal text-gray-500">
                  12 days ago
                </span>
              </div>
            </div>
            <div className="">
              <IoIosMore className="text-2xl" />
            </div>
          </div>
          <div className="">
            <div className="flex flex-col space-y-3">
              <span className="">
                Numbers don’t lie, but people do. Check the countdown to see
                who’s climbing higher.
              </span>
              <div className="flex flex-row items-center space-x-3 text-gray-800">
                <div className=" bg-gray-100 bg-opacity-5 border border-[#ff9da8] w-10 h-10 items-center justify-center flex rounded-full">
                  15
                </div>
                <div className=" bg-gray-100 bg-opacity-5 border border-[#ff9da8] w-10 h-10 items-center justify-center flex rounded-full">
                  12
                </div>
                <div className=" bg-gray-100 bg-opacity-5 border border-[#ff9da8] w-10 h-10 items-center justify-center flex rounded-full">
                  9
                </div>
                <div className=" bg-gray-100 bg-opacity-5 border border-[#ff9da8] w-10 h-10 items-center justify-center flex rounded-full">
                  22
                </div>
                <div className=" bg-gray-100 bg-opacity-5 border border-[#ff9da8] w-10 h-10 items-center justify-center flex rounded-full">
                  1
                </div>
              </div>
              {status?.includes(1) ? (
                <div className="flex w-full flex-row items-center space-x-3 pt-2">
                  <button
                    disabled
                    className="w-full cursor-not-allowed p-3 bg-[#cb0531] text-white rounded-[10px]"
                  >
                    Solved
                  </button>
                </div>
              ) : (
                <div className="flex w-full flex-row items-center space-x-3 pt-2">
                  <div className="w-full">
                    <input
                      type="text"
                      onChange={(e) => {
                        setFirstInput(e.target.value);
                      }}
                      placeholder="Answer"
                      className="w-full bg-[#ff9da8] bg-opacity-5 p-3 rounded-lg outline-none border-none"
                    />
                  </div>
                  <div className="">
                    <MdSend
                      onClick={() => {
                        handleFirst();
                      }}
                      className="text-2xl cursor-pointer"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center  mt-[-10px] justify-center backdrop-blur-md bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg lg:w-[40vw] w-[90vw] flex flex-col items-center justify-center space-y-10">
              <div className="w-full items-center justify-center flex">
                <Image
                  className="w-[15rem] mt-[-13px] mr-2"
                  src={"/about.svg"}
                  alt="0"
                  width={100}
                  height={100}
                />{" "}
              </div>
              <p className="text-gray-600 text-xl mb-6">{modalMessage}</p>
              {!showPayment && (
                <button
                  className="px-4 py-2 bg-[#cb0531] text-white rounded-md hover:bg-blue-700 transition-all w-full"
                  onClick={() => {
                    setIsModalOpen(false);
                    // window.location.reload()
                  }} // Close modal logic
                >
                  Okay
                </button>
              )}
              {showPayment && (
                <Link href={"/payment"}>
                  <div className="border border-[#cb0531] p-3 rounded-md">
                    <span className="text-[#cb0531] font-bold">
                      Head to : https://localhost:3000/payment
                    </span>
                  </div>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="w-full px-[5vw] py-[1.5rem] bg-white mt-10">
        <div className="">
          <span
            className="cursor-pointer"
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            AboutThat
          </span>
        </div>
      </div>
    </div>
  );
}
