import Image from "next/image";

const ReadyToStart = () => {
  return (
    <div className="bg-[#FFFFFF]  pt-10 pb-36 sm:pb-40 md:py-40">
      <div className=" flex relative flex-col items-center md:flex-row space-y-24 sm:space-y-32 md:space-y-0">
        <div className="flex-1 mb-10 md:mb-0  flex justify-end">
          <div className="max-w-xl z-40  w-full px-4 space-y-2 md:space-y-4 text-center md:text-left">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Ready To get started ?
            </h1>{" "}
            <p className="opacity-50 md:max-w-sm text-sm sm:text-base md:text-lg">
              Create an account and get reward with you first deposit.{" "}
            </p>{" "}
            <button className="bg-[#1162FF] py-2 md:py-4 px-6 md:px-12 rounded-full text-[#ffffff] font-semibold text-base md:text-lg">
              Register now{" "}
            </button>{" "}
          </div>{" "}
          <img
            className="hidden md:block absolute bottom-0 right-[3/4] -translate-x-[3/4]"
            src="/assets/images/dots.png"
            alt="dots"
          />
        </div>

        <div className="flex-1 mx-4 my-20 flex items-center justify-center">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={70}
            height={70}
          />{" "}
          {/* Inner */}{" "}
          <div className=" w-44 h-44 sm:w-72 sm:h-72 flex flex-col items-center justify-between absolute border-2 border-[#CCC] rounded-full animate-spin-slow">
            <Image
              className=" transform -translate-x-14 md:-translate-x-20"
              src="/assets/icons/usdt.svg"
              alt="usdt"
              width={60}
              height={60}
            />

            <Image
              className=" transform translate-x-14 md:translate-x-20"
              src="/assets/icons/bitcoin.svg"
              alt="bitcoin"
              width={60}
              height={60}
            />
          </div>
          {/* Outer */}
          <div className=" w-64 h-64 sm:w-96 sm:h-96 flex items-center justify-between absolute border-2 border-[#CCC] rounded-full animate-spin-slow">
            <div className="flex justify-between items-center h-full w-full">
              <Image
                src="/assets/icons/shib.svg"
                className=" transform -translate-x-5"
                alt="shib"
                width={40}
                height={40}
              />
              <Image
                src="/assets/icons/bnb.svg"
                className=" transform translate-x-5"
                alt="bnb"
                width={40}
                height={40}
              />
            </div>

            {/* <div className="absolute flex justify-between items-center h-full w-full">
              <Image
                src="/assets/icons/bnb.svg"
                className="transform -translate-x-8 translate-y-[7.5rem] "
                alt="bnb"
                width={20}
                height={20}
              />
              <Image
                src="/assets/icons/ethereum.svg"
                className=" transform -translate-x-8 translate-y-[7.5rem]"
                alt="ethereum"
                width={20}
                height={20}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToStart;
