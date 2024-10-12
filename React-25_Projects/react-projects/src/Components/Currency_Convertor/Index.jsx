import { useEffect, useState } from "react";
import './style.css'

function CurrencyConvertor() {

    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR");
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [exchangeRate, setExchangeRate] = useState(1);

    const handleFromCurrencyChange = (e) => {
        setFromCurrency(e.target.value);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleToCurrencyChange = (e) => {
        setToCurrency(e.target.value);
    };

    async function fetchExchangeRate() {
        try {
            const response = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`, {
                method: 'GET',
            });
            const data = await response.json();            
            setExchangeRate(data.rates[toCurrency]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchExchangeRate();
    }, [fromCurrency, toCurrency]);

    useEffect(() => {
        setConvertedAmount((amount * exchangeRate).toFixed(2));
    }, [amount, exchangeRate]);

    return (
        <div className="container">
            <h1>Currency Convertor</h1>
            <div className="input-group">
                <input
                    type="number"
                    onChange={handleAmountChange}
                    name="amount"
                    id="amount"
                    value={amount}
                    placeholder="Enter the amount"
                />
                <select value={fromCurrency} onChange={handleFromCurrencyChange}>
                    <option value="USD">USD</option>
                    <option value="INR">INR</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
            <p>To</p>
            <div className="input-container">
                <input type="number" value={convertedAmount}/>
                <select value={toCurrency} onChange={handleToCurrencyChange}>
                    <option value="USD">USD</option>
                    <option value="INR">INR</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
            <p>
                Converted Amount of {amount} {fromCurrency} is {convertedAmount} {toCurrency}
            </p>
        </div>
    );
}

export default CurrencyConvertor;
