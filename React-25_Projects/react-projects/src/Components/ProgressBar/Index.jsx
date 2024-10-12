function StepProgressBar({ steps, active,setActive }) {

    const handlePrevStep = ()=>{
        setActive((prevstep)=>Math.max(prevstep-1,0));
    }
    const handleNextStep = ()=>{
        setActive((prevstep)=>Math.min(prevstep+1,steps.length-1));
    }

    const calculateCurrentStep = ()=>{
        return`${(100/(steps.length-1)) * active }%`;
    }
    return (
        <div>
            <div className="steps">
                {steps && steps.length > 0 ? (
                    steps.map((step, index) => (
                        <div className={`step ${index<=active ? 'active':''}`} style={{width:calculateCurrentStep()}} key={index}>{step}</div>
                    ))
                ) : null}
            </div>
            <div className="button">
                <button disabled = {active===0} onClick={handlePrevStep}>
                    Previous Step
                </button>
                <button disabled = {active === steps.length-1} onClick={handleNextStep}>
                    Next Step
                </button>
            </div>
        </div>
    );
}

export default StepProgressBar;
