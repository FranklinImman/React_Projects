import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import './index.css'
const App = () => {

  const currentTheme = localStorage.getItem('currentTheme');
  const [theme,setTheme] = useState(currentTheme ? currentTheme : 'light');
  useEffect(()=>{
    localStorage.setItem('currentTheme', theme);
  },[theme]);

  return (
    <div className={`container ${theme}`}>
      <Navbar theme = {theme} setTheme = {setTheme}/>
    </div>
  )
}

export default App