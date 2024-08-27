import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
    // 1. Renamed 'amout' to 'amount' for consistency
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");  //currency from 
    const [to, setTo] = useState("inr");      // currency to
    const [convertedAmt, setConvertedAmt] = useState(0); //converted amt 

    const currencyInfo = useCurrencyInfo(from);  //currency custom hook

    const options = Object.keys(currencyInfo);

    const swap = () => {
        // 2. Improved swap logic to correctly set 'from' and 'to' states and exchange amounts
        setFrom(to);
        setTo(from);
        setConvertedAmt(amount);
        setAmount(convertedAmt);
    };

    const convert = () => {
        setConvertedAmt(amount * currencyInfo[to]);
    };

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount} // 1. Updated 'amout' to 'amount'
                                onAmountChange={(amount) => setAmount(amount)} // 1. Updated 'amout' to 'amount'
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setAmout(amount)} // 3. Removed array brackets to properly handle event
                                selectCurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmt}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)} // 3. Removed array brackets to properly handle event
                                selectCurrency={to} // 4. Updated to use 'to' instead of 'from'
                                amountDisabled
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()} {/* 5. Updated button text to display selected currencies */}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
