import { useState } from 'react'

import './App.css'
import { useEffect } from 'react';

function App() {

  const [currentTime,setCurrentTime]=useState(new Date());
  useEffect(()=>{
    const timer = setInterval(()=>{
      setCurrentTime(new Date())
    },1000);

    return ()=>clearInterval(timer);

  },[])

  const formattime= (hour)=>{
    return hour===0?12:hour>12?hour-12:hour;
  }

  const formatwithzero=(zero)=>{
return zero<10?`0${zero}`:zero;
  }

  const formatDate = (day)=>{
    const options = {weekday:"long",year:"numeric",month:"long",day:"numeric"};
    return day.toLocaleDateString(undefined,options)
  }

  return (
    <>
      <div className="digital-clock">
        <h1>Digital Clock</h1>
        <div className="time">{formatwithzero(formattime(currentTime.getHours()))}:
          {formatwithzero(currentTime.getMinutes())}:
          {formatwithzero(currentTime.getSeconds())} 
          {currentTime.getHours>12?" PM":" AM"}
        </div>
        <div className="data">{formatDate(currentTime)}</div>
      </div>
    </>
  )
}

export default App
