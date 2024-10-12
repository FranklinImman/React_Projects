import { useState } from 'react';
import './tip.css'
function TipCalculator() {

    const [billAmount,setbillAmount] = useState('');
    const [tipPercentage, setTipPercentage] = useState(10);
    const [splitCount, setSplitCount] = useState(1);
    const [tipAmount, setTipAmount] = useState({}); 
    const [error,setError] = useState('');

    const handleClick = () => {
        if(!billAmount || billAmount<=0 || !tipAmount || tipAmount<=0){
            setError("Please enter valid bill amount and tip amount.");
            return;
        }
        const bill = parseFloat(billAmount);
        const tip = (bill * tipPercentage)/100;
        const totalAmount = bill + tip;
        const tipAmountperPerson = tip/splitCount;
        const perperson = totalAmount/splitCount;   

        setTipAmount({
            totalAmount:totalAmount.toFixed(2),
            tipPerPerson:tipAmountperPerson.toFixed(2),
            totalAmountperperson:perperson.toFixed(2)
        })
        setError('');
    }

    return ( 
        <div className='tip-calculator'>
            <h1>Tip Calculator</h1>
            <div className="input-container">
                <label>Bill Amount:</label>
                <input value={billAmount} onChange={(e)=>setbillAmount(e.target.value)} type="number"/>
                <label>Tip Percentage</label>
                <input value={tipPercentage} onChange={(e)=>setTipPercentage(e.target.value)} type="number"/>
                <label>Number of People</label>
                <input value={splitCount} onChange={(e)=>setSplitCount(e.target.value)} type="number"/>
            </div>
            <button onClick={handleClick}>Calculate Tip</button>
            {error && <p>{error}</p>}
            {tipAmount.totalAmount && (
                   <div className='tip-result'>
                   <p>Total Amount:{tipAmount.totalAmount}</p>
                   <p>TipPerperson:{tipAmount.tipPerPerson}</p>
                   <p>TotalPerPerson:{tipAmount.totalAmountperperson}</p>
               </div>
            )
             
            }
        </div>
     );
}

export default TipCalculator;