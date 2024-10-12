import { useState } from 'react'

import './App.css'
import data from './Questions.json' 
import { useEffect } from 'react';
function App() {
const [currentquestion,setCurrentquestion]=useState(0);
const [score,setscore] = useState(0);
const [showscore,setshowscore] = useState(false);
const [timer,settimer]=useState(10)

useEffect(()=>{

  let interval;
  if(timer>0 && !showscore){
    interval = setInterval(()=>{
      settimer((prevtime)=>prevtime-1)
    },1000)
  }
  else{
    // setCurrentquestion((prevquestion)=>prevquestion+1);
    setshowscore(true);
  }
  return ()=>clearInterval(interval);
}),[timer,showscore]

const handleAnswer = (selected)=>{
  if(selected == data[currentquestion].correctoptions)
    {
      setscore((prevscore)=>prevscore+1);

    }
  if(currentquestion<data.length-1){
    setCurrentquestion((prevquestion)=>prevquestion+1);
    settimer(10);
  }else{
    setshowscore(true);
  }

}

const handlerestart = ()=>{
  setCurrentquestion(0);
  setscore(0)
  settimer(10)
  setshowscore(false);
}

  return (
    <>
     <div className="quiz-app">
   {showscore ?     ( <div className="score-section" >
        <p>Your Score is : {score}/{data.length}</p>  
        <button onClick={handlerestart}>Restart</button>
      </div>):(
       <div className="question-section">
       <h2>Question {currentquestion+1}</h2>
       <p>{data[currentquestion].question}</p>
     <div className="options">
      {data[currentquestion].options.map((Option,index)=>(
        <button key={index} onClick={()=>handleAnswer(Option)} >{Option}</button>
      ))}
     </div>
     <div className="timer">
     Time left:  
      <span>{timer}s</span> 
     </div>
     </div>
     )}
     </div>
    </>
  )
}

export default App
