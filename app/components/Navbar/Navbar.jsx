"use client";
import React from "react";
import { TiKeyboard } from "react-icons/ti";
import { FaCrown, FaInfo, FaRegUser, FaKeyboard } from "react-icons/fa";
import { IoMdSettings, IoIosNotifications } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useAppCtx } from "../../context/AppContext";
import Image from "next/image";
import { useTestCtx } from "../../context/TestContext";
import Popup from "../Reusable/Popup";
import Crown from "@/app/components/Crown/Crown";
import Theme from "@/app/components/Theme/Theme";
import LangSearch from "../Lang/LangSearch";

const Navbar = () => {
  const { splash, crownPopup, setCrownPopup, themePopup, setThemePopup } =
    useAppCtx();
  const { restartTest, isRunning } = useTestCtx();
  const router = useRouter();
  const navsLeft = [
    {
      icon: <TiKeyboard />,
      clicked: () => {
        restartTest();
      },
    },
    {
      icon: <FaCrown />,
      clicked: () => {
        setCrownPopup(true);
      },
    },
    {
      icon: <FaInfo />,
      clicked: () => {
        router.push("/test/about");
      },
    },
    {
      icon: <IoMdSettings />,
      clicked: () => {
        router.push("/test/settings");
      },
    },
  ];
  const navsRight = [
    {
      icon: (
        <IoIosNotifications style={{ fontSize: "23px", marginTop: "2px" }} />
      ),
    },
    {
      icon: <FaRegUser style={{ fontSize: "16px", marginTop: "5px" }} />,
      clicked: () => {
        router.push("/test/login");
      },
    },
  ];
  return (
    <div className="flex w-full h-[5vh] items-center pt-12 p-10 justify-between">
      <div className="flex">
        <div className="flex items-center">
          <button
            style={{ visibility: splash || isRunning ? "hidden" : "visible" }}
            onClick={restartTest}
          >
            <FaKeyboard className="text-4xl text-scoreColor m-2 mt-4" />
          </button>

          <Image
            src={"/logo.png"}
            width={150}
            height={50}
            className="sm:flex xs:hidden md:w-[190px] sm:w-[150px]"
          />
          <div
            className="flex"
            style={{ visibility: splash || isRunning ? "hidden" : "visible" }}
          >
            {navsLeft.map((nav) => (
              <button
                className="text-xl text-softText m-2 cursor-pointer hover:text-lightText"
                onClick={nav.clicked ? nav.clicked : () => {}}
              >
                {nav.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div
        className="flex"
        style={{ visibility: splash || isRunning ? "hidden" : "visible" }}
      >
        {navsRight.map((nav) => (
          <button
            onClick={nav.clicked ? nav.clicked : () => {}}
            key={nav.icon}
            className="text-xl text-softText m-2 cursor-pointer hover:text-lightText"
          >
            {nav.icon}
          </button>
        ))}
      </div>
      {crownPopup && (
        <Popup
        children={<Crown/>}
        closePopup={() => setCrownPopup(!crownPopup)}
        style={"md:w-[700px] lg:w-[850px] xs:w-[85%] "}
        />
      )}
      {themePopup && (
        <Popup
          children={<LangSearch data={["sameh","hammad"]} />}
          closePopup={() => setThemePopup(!themePopup)} 
          style={"md:w-[600px] xs:w-[85%]"}
        />
      )}
    </div>
  );
};

export default Navbar;
