import Image from "next/image";

const MultiCrypto = () => {
  return (
    <div className="bg-[#F4F7FE] py-8 px-4">
      <div className="max-w-6xl mx-auto flex items-center flex-col md:flex-row justify-between space-y-4 sm:space-y-6 md:space-y-0 md:space-x-8">
        <div className="flex-1">
          <div className="relative h-full w-full">
            <img src="/assets/images/map1.png" alt="map" />
          </div>
        </div>
        <div className="max-w-md space-y-2 text-center md:text-left">
          <h1 className="font-bold text-xl sm:text-2xl md:text-4xl">
            Multi-Cryptocurrency Exchange
          </h1>
          <p className="text-[#190D2D80] text-sm sm:text-base md:text-lg font-light md:ml-4">
            DCX is a global and innovative cryptocurrency exchange that supports
            the top cryptocurrencies in the market. With DCX, you can choose
            your favorite assets and trade them in real-time, all while enjoying
            low fees and top-notch security. Our platform is designed to provide
            you with a secure trading experience, so you can trade with
            confidence. Whether you&apos;re a seasoned trader or new to the
            world of cryptocurrency, DCX is the perfect place for you to buy,
            sell, and trade your favorite digital assets. Join us today and
            experience the future of cryptocurrency trading!
          </p>
          <p className="text-[#1162FF] text-xs xs:text-sm md:text-base md:ml-4 ">
            {" "}
            Bitcoin, Ethereum, Monero, Litecoin, Zeash
          </p>
        </div>
      </div>
    </div>
  );
};

export default MultiCrypto;
