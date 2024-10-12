import { useEffect, useRef, useState } from "react";

function CountdownTimer({initailTime,onTimeFinish}) {

    const [time,setTime] = useState(initailTime);
    const [isTimerRunning, setIsTimerRunning] = useState(true);
    const intervalreferences = useRef();

    useEffect(()=>{
        if(isTimerRunning){
            intervalreferences.current = setInterval(()=>{
                setTime(prevtime => {
                    if(prevtime === 0){
                        clearInterval(intervalreferences.current);
                        setIsTimerRunning(false);
                        if(onTimeFinish){
                            onTimeFinish();
                        }
                        return 0;
                    }
                    return prevtime - 1; 
                } );
            },1000);
        }else{
            clearInterval(intervalreferences);
        }
        return ()=> clearInterval(intervalreferences.current); 
    },[isTimerRunning,onTimeFinish]);

    const minutes = Math.floor(time/60);
    const seconds = time%60;

    const handlePauseandResume = ()=>{
        setIsTimerRunning(prev => !prev);
    }

    const handleStart = ()=>{
        setIsTimerRunning(true);
    }
    const handleReset = ()=>{
        clearInterval(intervalreferences.current);
        setTime(initailTime);
        setIsTimerRunning(false);
    }

    return ( 
        <div className="timer">
            <p>{String(minutes).padStart(2,'0')}:{String(seconds).padStart(2,'0')}</p>
            <div className="timer-button">
                <button onClick={handlePauseandResume}>{isTimerRunning?'Pause':'Resume'}</button>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
     );
}

export default CountdownTimer;