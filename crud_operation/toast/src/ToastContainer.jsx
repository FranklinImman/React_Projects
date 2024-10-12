import React from 'react'

const ToastContainer = () => {
  return (
    <div className="container">
        <div className="toast-container">
            <div className="toast">
                This is the toast message
                <span>&times;</span>
            </div>
        </div>
        <div className="button-container">
            <button>Success</button>
            <button>Danger</button>
            <button>Warning</button>
            <button>Info</button>
        </div>
    </div>
  )
}

export default ToastContainer