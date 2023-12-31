import React from "react";
import Input from "@/app/components/Reusable/Input";
import Button from "@/app/components/Reusable/Button";
import { IoPersonAddSharp } from "react-icons/io5";
import { FaSignInAlt,FaGoogle  } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex w-full justify-around pt-4 sm:pt-10 mb-5 xs:flex-col sm:flex-row xs:gap-8 sm:gap-0 items-center font-mono">
      <div className="flex flex-col ">
        <p className="text-lightText text-lg ">rigister</p>
        <form className="flex flex-col gap-2">
          <Input placeholder={"username"} />
          <Input placeholder={"email"} />
          <Input placeholder={"verify email "} />
          <Input placeholder={"password"} type={"password"} />
          <Input placeholder={"verify password"} type={"password"} />
          <Button children={"Sign Up"} icon={<IoPersonAddSharp />} />
        </form>
      </div>
      <div className="flex flex-col ">
        <div className="flex justify-between">
          <p className="text-lightText text-lg ">login</p>
          <p className="text-softText text-sm ">forgot password?</p>
        </div>
        <form className="flex flex-col gap-2">
          <Input placeholder={"email"} />
          <Input placeholder={"password"} type={"password"} />
          <Button children={"Sign In"} icon={<FaSignInAlt />} />
          <p className="text-center text-lightText ">or</p>
          <Button children={"Google Sign In"} icon={<FaGoogle  />} />
        </form>
      </div>
    </div>
  );
};

export default Login;
