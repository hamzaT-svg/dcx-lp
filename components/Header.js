import { useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Navbar from "./Navbar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-0 left-0 right-0 z-50 bg-[#FFFFFF]">
      <div className="border-b border-opacity-50 border-[#0000004D] ">
        <div className="max-w-[1420px] mx-auto py-2 h-[66px] md:h-[80px]  px-4 md:px-10 flex items-center justify-between">
          <div onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </div>
          <div className="flex items-center md:space-x-4 xl:space-x-6">
            <div className="flex items-center  space-x-2">
              <Image
                width={52}
                height={52}
                src="/assets/icons/logo.svg"
                alt="logo"
              />
              <h1 className="font-bold text-xl">DCX.DO</h1>
            </div>
            <div className="hidden md:block">
              <Navbar />
            </div>
          </div>
          <div>
            <div className="flex items-center md:space-x-3 xl:space-x-4">
              <p className="font-semibold">Sign in</p>
              <button className="hidden md:block text-sm md:text-base cursor-pointer font-semibold rounded-lg px-4 md:px-8 py-1 md:py-1.5 text-[#ffffff] bg-[#1162FF]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="">
          <Navbar />
        </div>
      )}
    </div>
  );
};

export default Header;
