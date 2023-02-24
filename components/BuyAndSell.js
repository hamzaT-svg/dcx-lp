import dynamic from "next/dynamic";
import Image from "next/image";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const BuyAndSell = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto py-10 px-8">
        <div className="font-semibold text-center space-y-1">
          <h1 className=" text-xl sm:text-4xl">
            Buy And Sell Your Cryptocurrency in 3 Clicks
          </h1>
          <p className="text-[#00000066] text-sm md:text-base ">
            DCX provide a quick solution to Sell and Buy Your Crypto
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-6 sm:my-10">
          <div className="flex flex-col items-center space-y-2 md:space-y-4">
            <div className="h-24 relative w-24 flex items-center">
              <Image src="/assets/icons/eye.svg" alt="eye" fill />
            </div>
            <div className="text-center space-y-1">
              <h2 className="font-semibold text-xl sm:text-2xl">
                Select Cryptocurrency
              </h2>
              <p className="font-normal text-[#00000099] text-base">
                Select the Crypto you love and buy or sell it in realtime, we
                offer a few options.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2 md:space-y-4">
            <div className="h-24 relative w-24 flex items-center">
              <Image src="/assets/icons/mail.svg" alt="mail" fill />
            </div>
            <div className="text-center space-y-1">
              <h2 className="font-semibold text-xl sm:text-2xl">
                Payment Method
              </h2>
              <p className="font-normal text-[#00000099] text-base">
                Connect your prefere payment method like Debit Card, Bank
                Account, tpago.
              </p>
            </div>
          </div>

          <div className="sm:col-span-2 md:col-auto flex flex-col items-center space-y-2 md:space-y-4">
            <div className="h-24 w-28 relative flex items-center">
              <Image src="/assets/icons/fund.svg" alt="fund" fill />
            </div>
            <div className="text-center space-y-1">
              <h2 className="font-semibold text-xl sm:text-2xl">Get Funds</h2>
              <p className="font-normal text-[#00000099] text-base">
                Received your Crypto in your wallet or your balance in your
                Local Bank Account
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0075FF] w-full">
        <div className="max-w-6xl mx-auto py-8 px-4 text-[#ffffff] grid grid-cols-1 gap-6 sm:gap-10 sm:grid-cols-3">
          <div className="text-center space-y-1 flex flex-col items-center">
            <AnimatedNumber number={10000} />
            <p className="font-medium text-sm">Active Users</p>
          </div>{" "}
          <div className="text-center space-y-1">
            <h1 className="font-semibold text-5xl flex items-center justify-center">
              $
              <AnimatedNumber number={102} /> M+
            </h1>
            <p className="font-medium text-sm">Monthly volume traded</p>
          </div>
          <div className="text-center space-y-1">
            <h1 className="font-semibold text-5xl flex items-center justify-center">
              M
              <AnimatedNumber number={89} /> +
            </h1>
            <p className="font-medium text-sm">Total volume Trade(24h)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyAndSell;

const AnimatedNumber = ({ number }) => {
  return (
    <AnimatedNumbers
      includeComma={true}
      animateToNumber={number}
      fontStyle={{ fontSize: 48, lineHeight: 1, fontWeight: 600 }}
      configs={(number, index) => {
        return { mass: 1, tension: 230 * (index + 1), friction: 140 };
      }}
    ></AnimatedNumbers>
  );
};
