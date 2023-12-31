"use client";
import React, { useEffect, useState } from "react";
import Popup from "@/app/components/Reusable/Popup";
import LangSearch from "@/app/components/Lang/LangSearch";
import { MdOutlineLanguage } from "react-icons/md";
import { useTestCtx } from "../../context/TestContext";
import { useAppCtx } from "../../context/AppContext";
import { languages } from "../../lib/lang";

const Lang = () => {
  const { lang, restartTest, isRunning } = useTestCtx();
  const { showPopup, setShowPopup, closePopup } = useAppCtx();

  useEffect(() => {
    const focus = restartTest();
    return () => {
      focus;
    };
  }, [lang]);
  return (
    <div
      className="flex items-center justify-center m-2"
      style={{ visibility: isRunning ? "hidden" : "visible" }}
    >
      <div
        className="flex items-center gap-1 text-sm text-softText  hover:text-lightText cursor-pointer"
        onClick={closePopup}
      >
        <MdOutlineLanguage />
        <p>{lang}</p>
        {showPopup && (
          <Popup
            closePopup={closePopup}
            children={<LangSearch data={languages} />}
            style={"md:w-[600px] xs:w-[85%]"}
          />
        )}
      </div>
    </div>
  );
};

export default Lang;
