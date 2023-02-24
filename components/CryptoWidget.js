import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";

const CryptoWidget = () => {
  const styles = {
    parent: {
      display: "none",
    },
  };
  return (
    <div>
      <CryptoCurrencyMarket width="100%" copyrightStyles={styles} />
    </div>
  );
};

export default CryptoWidget;
