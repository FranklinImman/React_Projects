import React, { useState } from 'react'
import "./QrCode.css";
export const QrCode = () => {
    const[img,setImage]=useState("")
    const[loading,setLoading]=useState(false)
    const[qrcode,setQrcode]=useState("https://youtube.com/")
    const[qrsize,setQrsize]=useState("150")
    async function generateQR(){
        setLoading(true);
        try{
            const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrcode)}`;
            setImage(url);
        }catch (error){
            console.log(error);
        }
        finally{
            setLoading(false);
        }
    }

    function downloadQR(){
     fetch(img)
     .then((response)=>response.blob())
     .then((blob)=>{
        const link=document.createElement("a")
        link.href=URL.createObjectURL(blob);
        link.download="qrcode.png"
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
     }).catch((error)=>{
        console.log(error)
     })
    }

  return (
    <div className='app-container'>
        <h1>QR CODE GENERATOR</h1>
        {loading && <p>Please Wait...</p>}
            {img && <img src={img} alt="QR code" className='qr-code-image'/>}
        <div>
            <label htmlFor="dataInput" className='input-label'>
                Data for QR code:
            </label>
            <input type="text" id="dataInput" placeholder='Enter data for QR code' value={qrcode} onChange={(e)=>{
                setQrcode(e.target.value)
            }}/>
            <label htmlFor="sizeInput" className='input-label'>
                Image Size (e.g.,150)          
  </label>
            <input type="text" id="sizeInput" placeholder='Enter Size for QR code' value={qrsize} onChange={(e)=>{
                setQrsize(e.target.value)
            }}/>
            <button className='generate-button' disabled={loading}onClick={generateQR}>Generate QR code</button>
            <button className='download-button'onClick={downloadQR}>Download QR code</button>
        </div>
        <p className='footer'>Designed by Franklin Immanuel</p>
    </div>
  )
}
