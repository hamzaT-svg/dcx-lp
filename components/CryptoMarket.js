import CryptoWidget from "./CryptoWidget";
import TechnicalWidget from "./TechnicalWidget";

const CryptoMarket = () => {
  return (
    <div className="bg-[#FFFFFF] py-10">
      <div className="font-semibold px-8 text-center space-y-1">
        <h1 className=" text-xl sm:text-4xl">
          Cryptocurrency Market Price Overview
        </h1>
        <p className="text-[#00000066] text-sm md:text-base ">
          Brief information About the Cryptocurrency Space
        </p>
      </div>
      <div className=" max-w-[1460px] px-2 md:px-4 mx-auto py-6 md:space-x-10 space-y-6 md:space-y-0 flex-col md:flex-row flex items-center">
        <div className="flex-1">
          <CryptoWidget />
        </div>
      </div>
    </div>
  );
};

export default CryptoMarket;
