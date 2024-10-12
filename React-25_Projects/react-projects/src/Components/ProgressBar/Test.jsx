import { useState } from "react";
import StepProgressBar from "./Index";
import './progess.css'

function StepProgessBarTest() {

    const [active,setActive] = useState(0);
    const steps = ["step1", "step2", "step3", "step4", "step5", "step6", "step7"];

    return ( 
        
        <div className="container">
         <StepProgressBar steps={steps} active = {active} setActive={setActive}/>
        </div>
     );
}

export default StepProgessBarTest;