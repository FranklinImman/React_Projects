import CountdownTimer from ".";
import './time.css'
function handleTimefinish(){

}

function CountdownTimerTest() {
    return ( 
        <div className="countdown-timer-container">
            <h1>CountDown Timer</h1>
            <CountdownTimer initailTime={300} onTimeFinish={handleTimefinish}/>
        </div>
     );
}

export default CountdownTimerTest;