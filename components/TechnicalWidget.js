import { TechnicalAnalysis } from "react-ts-tradingview-widgets";

const TechnicalWidget = () => {
  const styles = {
    parent: {
      display: "none",
    },
  };
  return (
    <div>
      <TechnicalAnalysis
        width="100%"
        styles={{
          borderRadius: "10px",
        }}
        copyrightStyles={styles}
      />
    </div>
  );
};

export default TechnicalWidget;
