import { useState } from 'react'

import './App.css'

function App() {

  const [height,setHeight] = useState("");
  const [weight,setweight] = useState("");
  const [BMI,setBMI] = useState(null);
  const [status,setStatus] = useState("");
  const [error,setError] = useState(false);
  const CalculateBmi = ()=>{
    const isvalidheight = /^\d+$/.test(height);
    const isvalidweight = /^\d+$/.test(weight);

    if(isvalidheight && isvalidweight){
      const heightinmeter = height/100;
      const bmivalue = weight / (heightinmeter * heightinmeter);
      setBMI(bmivalue.toFixed(2))
      if(bmivalue<18.5){
        setStatus("UnderWeight");
      }else if(bmivalue >= 18.5 && bmivalue<24.9){
        setStatus("Normal");
      }
      else if(bmivalue>=25 && bmivalue < 29.9){
        setStatus("OverWeight");
      }
      else{
        setStatus("Obessed")
      }
      setError("")
    }
    else{
      setBMI(null);
      setStatus("");
      setError(true);
    }
  
  }

  const clearAll=()=>{
    setBMI(null);
    setHeight("");
    setweight("");
    setStatus("");
  }
 
  return (
    <>
      <div className='bmi-container'>
        <div className="box"></div>
        <div className="data">
          <h1>BMI Calculator</h1>
          {error && <p className='error'>Please Enter the Valid for height and weight</p>}
          <div className="input-container">
            <label htmlFor="height">Height (cm):</label>
            <input type="text" id='height' value={height} onChange={(e)=>setHeight(e.target.value) }/>
          </div>
          <div className="input-container">
            <label htmlFor="weight">Weight (kg)</label>
            <input type="text" id='weight'value={weight}onChange={(e)=>setweight(e.target.value)}/>
          </div>
          <button onClick={CalculateBmi}>Calculate BMI</button>
          <button onClick={clearAll}>Clear</button>
         {BMI!== null  && <div className="result">
            <p>Your BMI is :{BMI}</p>
            <p>status:{status}</p>
          </div>}
        </div>
      </div>
    </>
  )
}

export default App
