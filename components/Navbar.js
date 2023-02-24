const Navbar = () => {
  return (
    <div className="fixed top-[66px] h-[calc(100vh-66px)] z-50 bg-[#FFFFFF] left-0 right-0 md:static md:h-auto px-4 md:px-0">
      <ul className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center md:space-x-3 xl:space-x-5">
        <li className="text-base cursor-pointer font-semibold border-b border-[#F6F6F6] md:border-none py-2">
          MARKET
        </li>
        <li className="text-base cursor-pointer font-semibold border-b border-[#F6F6F6] md:border-none py-2">
          TRADES
        </li>
        <li className="text-base cursor-pointer font-semibold border-b border-[#F6F6F6] md:border-none py-2">
          EARN
        </li>
        <li className="text-base cursor-pointer font-semibold border-b border-[#F6F6F6] md:border-none py-2">
          HELP
        </li>
        <li className="md:hidden">
          <button className="w-full text-sm md:text-base cursor-pointer font-semibold rounded-lg px-4 md:px-8 py-1.5 text-[#ffffff] bg-[#1162FF]">
            Get Started
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
