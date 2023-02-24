import Image from "next/image";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  const iconStyles = {
    color: "#1162FF",
  };
  return (
    <div className="bg-[#F4F7FE] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:max-w-lg w-full space-y-4">
            <div className="flex md:justify-start justify-center items-center  space-x-2">
              <Image
                width={52}
                height={52}
                src="/assets/icons/logo.svg"
                alt="logo"
              />
              <h1 className="font-bold text-xl">DCX.DO</h1>
            </div>

            <p className="text-[#190D2D80] font-normal text-sm text-center md:text-left mx-auto md:mx-0 max-w-lg md:max-w-sm">
              DCX is a simple and secure cryptocurrency exchange with all the
              tools you need to trade, buy, and sell your digital assets. Our
              platform is designed to inspire confidence and help you grow your
              portfolio, whether you&apos;re an experienced trader or new to the
              industry. Join us today and experience the future of crypto
              trading!
            </p>

            <div className="flex items-center justify-center md:justify-start space-x-2">
              <div className="bg-[#FFFFFF] w-8 h-8 flex items-center justify-center rounded-full">
                <TiSocialFacebook style={iconStyles} />
              </div>
              <div className="bg-[#FFFFFF] w-8 h-8 flex items-center justify-center rounded-full">
                <AiOutlineTwitter style={iconStyles} />
              </div>
              <div className="bg-[#FFFFFF] w-8 h-8 flex items-center justify-center rounded-full">
                <AiOutlineInstagram style={iconStyles} />
              </div>
            </div>

            <p className="text-center hidden md:block md:text-left">
              ©2023 DCX Solutions LLC
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-3 md:grid-cols-3 my-8">
            <div className="space-y-4 ">
              <h1 className="text-sm font-semibold">Website Menu</h1>
              <ul className="text-xs space-y-4 text-[#575d62]">
                <li className="duration-300 hover:text-[#007cff] cursor-pointer">
                  Home
                </li>
                <li className="duration-300 hover:text-[#007cff] cursor-pointer">
                  Wallet
                </li>
                <li className="duration-300 hover:text-[#007cff] cursor-pointer">
                  Card
                </li>
                <li className="duration-300 hover:text-[#007cff] cursor-pointer">
                  Developers
                </li>
                <li className="duration-300 hover:text-[#007cff] cursor-pointer">
                  Help
                </li>
              </ul>
            </div>

            <div className="space-y-4 order-3">
              <h1 className="text-sm font-semibold">Links</h1>
              <ul className="text-xs space-y-4 text-[#575d62]">
                <li className="duration-300 hover:text-[#007cff] cursor-pointer">
                  Exchange
                </li>
                <li className="duration-300 hover:text-[#007cff] cursor-pointer">
                  Markets
                </li>
                <li className="duration-300 hover:text-[#007cff] cursor-pointer">
                  Leaderboards
                </li>
                <li className="duration-300 hover:text-[#007cff] cursor-pointer">
                  Fees
                </li>
                <li className="duration-300 hover:text-[#007cff] cursor-pointer">
                  Privacy Policy
                </li>
                <li className="duration-300 hover:text-[#007cff] cursor-pointer">
                  Terms of Service
                </li>
              </ul>
            </div>

            <div className="space-y-4 order-2 ">
              <h1 className="text-sm text-[#190D2D] font-semibold">Help</h1>
              <ul className="text-xs space-y-4 text-[#190D2D80]">
                <li className="duration-300 hover:text-[#007cff] cursor-pointer">
                  FAQ
                </li>
                <li className="duration-300 hover:text-[#007cff] cursor-pointer">
                  Privacy Policy
                </li>
                <li className="duration-300 hover:text-[#007cff] cursor-pointer">
                  Terms and Conditions
                </li>
                <li className="duration-300 hover:text-[#007cff] cursor-pointer">
                  Support
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center md:hidden text-[#190D2D80]">
          ©2022 DCX Financial LLC
        </p>
      </div>
    </div>
  );
};

export default Footer;
