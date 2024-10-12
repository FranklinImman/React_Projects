import Tooltip from "./Index";
import './style.css'
function ToolTipTest() {
    return ( 
        <div className="container">
            <h1>ToolTips</h1>
            <Tooltip delay={1000} content = {"content"} children = {<p>Hover Me</p>}/>
        </div>
     );
}

export default ToolTipTest;