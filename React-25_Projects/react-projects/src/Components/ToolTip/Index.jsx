import { Children, useState } from "react";

function Tooltip({content,children,delay}) {

    let timeout;
    const [isVisible,setVisible] = useState(false);

    function handleShowTooltip(){
       timeout =  setTimeout(()=>{
            setVisible(true)
        },  500)
    }
    function handleShowTooltipLeave (){
        clearTimeout(timeout);
        setVisible(false);
    }

    return ( 
        <div>
            <div className="tool-tip"
            onMouseEnter={handleShowTooltip}
            onMouseLeave={handleShowTooltipLeave}
            >
             {children}
                
            </div>
            {isVisible ?  <div className="tool">{content}</div>:null}
        </div>
     );
}

export default Tooltip;