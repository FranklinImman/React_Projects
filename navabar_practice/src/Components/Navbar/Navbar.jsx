import React from 'react'
import logo_white from '../../assets/assets/logo-white.png'
import logo_black from '../../assets/assets/logo-black.png'
import searchicon_light from '../../assets/assets/search-w.png'
import searchicon_dark from '../../assets/assets/search-b.png'
import toggle_light from '../../assets/assets/night.png'
import toggle_dark from '../../assets/assets/day.png'
import './Navbar.css'


const Navbar = ({theme,setTheme}) => {

    const toggle_mode = ()=>{
        theme === 'light'? setTheme('dark') : setTheme('light');
    }

  return (
    <div className='navbar'>
        <img src={theme ==='light'? logo_black:logo_white} alt=""  className='logo'/>
        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Features</li>
            <li>About</li>
        </ul>
        <div className="search-box">
            <input type="text" placeholder="Search.."/>
            <img src={theme === 'light' ? searchicon_light : searchicon_dark} alt="" />
        </div>
        <img src={theme == 'light' ? toggle_light: toggle_dark  } alt="" onClick={toggle_mode} className="toggleicon" />
    </div>
  )
}

export default Navbar