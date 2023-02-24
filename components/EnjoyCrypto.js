import { VscGraphLine } from "react-icons/vsc";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";

const iconStyles = { color: "#FFFFFF", fontSize: "1rem" };

const EnjoyCrypto = () => {
  return (
    <div className="border-b">
      <div className="max-w-6xl mx-auto py-10 px-8">
        <div className="font-semibold text-center space-y-1">
          <h1 className=" text-xl sm:text-4xl">
            Start A New Life and Enjoy Crypto
          </h1>
          <p className="text-[#00000066] text-sm md:text-base ">
            DCX Made Easier to Manage your Cryptocurrency Assets
          </p>
        </div>

        <div className="flex flex-col space-y-3 my-10 md:flex-row items-center">
          <div className="flex-1 space-y-6">
            <div className="flex space-x-4">
              <div className="bg-[#1162FF] w-10 h-10 flex items-center justify-center shadow-3xl rounded-full">
                <VscGraphLine style={iconStyles} />
              </div>
              <div className="space-y-2 flex-1">
                <h2 className="font-semibold text-xl">Manage your Assets</h2>
                <p className="text-[#00000099] max-w-xs font-normal text-base">
                  Buy, Sell, Stake all your Crypto Assets with a easy to use
                  System.
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="bg-[#1162FF] w-10 h-10 flex items-center justify-center shadow-3xl rounded-full">
                <AiOutlineCalendar style={iconStyles} />
              </div>
              <div className="space-y-2 flex-1">
                <h2 className="font-semibold text-xl">Secure and Reliable</h2>
                <p className="text-[#00000099] max-w-xs font-normal text-base">
                  Scure your Assets with the 2FA, token validation, email and
                  SMS Verification.
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="bg-[#1162FF] w-10 h-10 flex items-center justify-center shadow-3xl rounded-full">
                <BsPhone style={iconStyles} />
              </div>
              <div className="space-y-2 flex-1">
                <h2 className="font-semibold text-xl">DCX Mobile App</h2>
                <p className="text-[#00000099] max-w-xs font-normal text-base">
                  Our Mobile App will Provide you all the tools To tack your
                  Crypto Assets 24/7.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="/assets/images/phone-screen-shots.png"
              alt="phone-screen-shot"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnjoyCrypto;
