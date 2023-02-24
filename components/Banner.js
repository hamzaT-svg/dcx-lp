import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import getCoins from "../apis/getCoins";
import coins from "../constants/coins";
import TradingViewWidget from "./TradingViewWidget";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import SingleTicker from "./SingleTicker";
const Main = (props) => {
  const [coinsData, setCoins] = useState([...props.coins]);
  useEffect(() => {
    const timer = setInterval(async () => {
      const coins = await getCoins();
      setCoins(coins);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return coinsData.map((coin) => {
    const perc = (+coin.price_24h_pcnt * 100).toFixed(2);
    return (
      <div className="flex items-center " key={coin.symbol}>
        <div className="flex-1 flex items-center ml-2 space-x-1">
          <Image
            width={18}
            height={18}
            src={`/assets/icons/${coins[coin.symbol]}.svg`}
            alt="bitcoin"
          />
          <h3 className="text-[#362B47] capitalize font-normal text-sm ">
            {coins[coin.symbol]}
          </h3>
        </div>
        <div className="flex-1 ml-6">
          <h3 className="text-[#362B47] font-normal text-sm">
            {formatter.format(coin.index_price)}
          </h3>
        </div>
        <div className="flex-1 text-right mr-2">
          <h3
            className={`${
              perc >= 0 ? "text-[#367AFF]" : "text-[#FF48C1]"
            }  font-semibold text-sm`}
          >
            {perc}%
          </h3>
        </div>
      </div>
    );
  });
};

const Banner = (props) => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="bg-[#1162FF9E]  overflow-hidden banner-height  mt-0 flex items-center w-full">
      <div className="h-full w-full absolute z-0 top-0 left-0 right-0 bottom-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          height="100vh"
          width="100vw"
          options={{
            fullScreen: false,
            background: {
              color: {
                // value: "#1162FF9E",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.8,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                directions: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
      <div className="max-w-[1440px] w-full  md:space-y-0  md:py-6 mx-auto px-6 flex-col-reverse  md:space-x-20	 md:flex-row flex items-center">
        <div className="flex-1 z-40 relative  mt-4 md:mt-0 space-y-4">
          <div className="space-y-2 ">
            <h1 className="font-bold text-[#1D1D1D] text-2xl text-center md:text-left md:text-3xl lg:text-5xl">
              DCX <span className="text-[#1162FF]">Simple and Secure</span>{" "}
              Exchange in Town
            </h1>

            <p className="opacity-60 text-sm text-center md:text-left md:text-base max-w-xl">
              Now you Can Sell, Buy, Trade and Stake your Crypto Assets all in
              one place.
            </p>
          </div>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 ">
            <input
              className="bg-[#ffffff] rounded-lg border border-[#0000002E] flex-1 p-2 outline-none"
              placeholder="Email address"
            />
            <button className="bg-[#1162FF]  text-[#ffffff] rounded-lg md:max-w-[184px] w-full p-2">
              Get started
            </button>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4 md:w-1/2 w-full h-12">
            <div className="relative cursor-pointer w-full h-full">
              <Image
                src={"/assets/icons/google-play.svg"}
                alt={"google-play"}
                fill
              />
            </div>
            <div className="relative cursor-pointer w-full h-full">
              <Image
                src={"/assets/icons/apple-store.svg"}
                alt={"apple-store"}
                fill
              />
            </div>
          </div>

          <div className="hidden md:block w-full">
            <div className="w-full mx-auto text-[#ffffff] flex items-center space-x-20">
              <div className=" space-y-1 flex flex-col ">
                <h1 className="font-semibold text-4xl">5M+</h1>
                <p className="font-medium text-sm">Active Users</p>
              </div>{" "}
              <div className=" space-y-1">
                <h1 className="font-semibold text-4xl">10K+</h1>
                <p className="font-medium text-sm">ATM Locations</p>
              </div>
              <div className=" space-y-1">
                <h1 className="font-semibold text-4xl">1K+</h1>
                <p className="font-medium text-sm">Volume (24h)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="relative z-40">
            <div className="hidden md:block absolute z-50 top-20 -left-16  rounded-xl overflow-hidden">
              <SingleTicker />
            </div>
            <div className="md:hidden w-full h-64 relative">
              <Image
                src="/assets/images/phone-screen-shots.png"
                alt="phone-screen-shots"
                fill
              />
            </div>
            <div className="hidden md:block rounded-2xl w-full h-96  sm:h-96 md:h-[450px] overflow-hidden">
              <TradingViewWidget />
            </div>
            <div className="bg-[#FFFFFF] max-w-[263px] w-full absolute hidden md:block md:bottom-5 md:-right-5 shadow-lg rounded-2xl py-4">
              <div className="bg-[#CCE4FF] flex items-center py-1">
                <h3 className="text-center text-[#362B47] font-semibold text-sm flex-1">
                  Coins.
                </h3>
                <h3 className="text-[#362B47] font-semibold text-sm ml-8 flex-1">
                  Price.
                </h3>
                <h3 className="text-right mr-2 text-[#362B47] font-semibold text-sm flex-1">
                  Pulse.
                </h3>
              </div>
              <div className="space-y-1 my-1">
                <Main {...props} />
              </div>
            </div>
          </div>
        </div>
        <div className="h-96 w-96 bg-[#FFFFFF80] blur-3xl absolute top-1/2 left-1/2 md:left-1/4 -translate-x-1/2 md:-translate-x-1/4 -translate-y-1/2 z-0"></div>
      </div>
    </div>
  );
};

export default Banner;
