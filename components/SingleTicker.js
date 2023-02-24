import { SingleTicker as SingleTickerWidget } from "react-ts-tradingview-widgets";

const SingleTicker = () => {
  const styles = {
    parent: {
      display: "none",
    },
  };
  return (
    <div className="max-w-[350px]">
      <SingleTickerWidget width="100%" copyrightStyles={styles} />
    </div>
  );
};

export default SingleTicker;
