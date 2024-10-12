
import './App.css'
import CurrencyConvertor from './Components/Currency_Convertor/Index'
import DigitalClock from './Components/Digital_Clock/Index'
import FilterCards from './Components/FilterCards/Index'
import MusicPlayer from './Components/Music_Player/Index'
import PaginationTest from './Components/Pagination/Test'
import StepProgessBarTest from './Components/ProgressBar/Test'
import QuoteGeneratorTest from './Components/Quote-Genarator/Test'
import CountdownTimerTest from './Components/Timer/test'
import TipCalculator from './Components/TipCalculator/Index'
import Tooltip from './Components/ToolTip/Index'
import ToolTipTest from './Components/ToolTip/Test'

function App() {

  return (
    <>
     <div className="App">
      <h1 className="title">React Projects</h1>
      {/* <PaginationTest/>
      <DigitalClock/>
      <CountdownTimerTest/>
      <StepProgessBarTest/>
      <QuoteGeneratorTest/>
      <ToolTipTest/>
      <CurrencyConvertor/>
      <FilterCards/>
      <TipCalculator/> */}
      <MusicPlayer/>
     </div>
    </>
  )
}

export default App
