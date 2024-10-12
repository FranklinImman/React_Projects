import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UserCard } from './UserCard.jsx'
//  import './index.css'
import { QrCode } from './QrCode.jsx'
import { Cart } from './Cart.jsx'
import { UserDetails } from './UserDetails.jsx'
import { RegFrm } from './RegFrm.jsx'
import { Advice } from './Advice.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UserCard/> */}
    {/* <QrCode/> */}
    {/* <Cart/> */}
    {/* <UserDetails/> */}
    {/* <RegFrm/> */}
    <Advice/>
  </React.StrictMode>,
)
