
import './App.css'
import { MultiTypeComponent } from './MultiTypeComponent'
import { FunctionSample } from './FunctionSample';
import { ArraySample } from './ArraySample'
import { OneofSample } from './OneofSample'
import { ChildComponent } from './ChildComponent'
import { Student } from './Student'
function App() {
  const items=[
    {id:1, name: "Item 1"},
    {id:2, name: "Item 2"},
    {id:3, name: "Item 3"},

  ]

  const handleclick= ()=>{
    alert("Button Clicked");
  }
  return (
    <>
     <Student name="Franklin" age={23} IsMarried={false}/>
     <Student name="Immanuel" />
      <Student/>
      <ChildComponent>
        <p>This is a Para 1</p>
        <p>This is a Para 2</p>
        </ChildComponent>       
        <ArraySample items={items}/> 
         <OneofSample color="green"/>
        <MultiTypeComponent value={34}/>
        <MultiTypeComponent value="Franklin"/>
        <MultiTypeComponent value={true}/>
        <div>
          <h2>Parent Component</h2>
          <FunctionSample handleClick={handleclick}/>
      </div>
    </>
  )
}

export default App
