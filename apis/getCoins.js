import { symbols } from "../constants/coins";

const getCoins = async () => {
    const json = await fetch('https://api-testnet.bybit.com/v2/public/tickers')
    const tickers = (await json.json()).result;
    return tickers.filter(ticker => symbols.includes(ticker.symbol));
}

export default getCoins;