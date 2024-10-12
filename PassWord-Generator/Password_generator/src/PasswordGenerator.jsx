import React, { useState } from 'react'

export const PasswordGenerator = () => {
    
    const [length,setlength] = useState(8);
    const [includeUpper,setIncludeUpper] = useState(true);
    const [includeLower,setIncludeLower] = useState(true);
    const [includeNumber,setIncludeNumber] = useState(true);
    const [includeSpecial,setIncludeSpecial] = useState(true);
    const [password,setPassword] = useState("");

    const handleClick=()=>{
        let charset='';
        if(includeUpper)charset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(includeLower)charset+="abcdefghijklmnopqrstuvwxyz";
        if(includeNumber)charset+="0123456789";
        if(includeSpecial)charset+="!@#$%^&*()_+-=";
        let generatePassword = "";
        let randomindex='';
        for(let i=0;i<length;i++){
            randomindex=Math.floor(Math.random()*charset.length);
            generatePassword+=charset[randomindex];
        }
        console.log(randomindex);
        setPassword(generatePassword);
      }
      const copytoclipboard = ()=>{
        navigator.clipboard.writeText(password);
        alert("Password Copied");
      }

  return (
    <div className='password-generator'>
        <h2>Strong Password Generator</h2>
        <div className="input-group">
            <label htmlFor="num" >Password Length:</label>
            <input type="number" id='num' value={length} onChange={(e)=>{
                setlength(parseInt(e.target.value));
            }}/>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" id='upper' checked={includeUpper} onChange={(e)=>{
                setIncludeUpper(e.target.checked);
            }}/>
            <label htmlFor="upper">Include Uppercase</label>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" id='lower'value={includeLower} onChange={(e)=>{
                setIncludeLower(e.target.checked);
            }}/>
            <label htmlFor="lower">Include LowerCase</label>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" id='number' value={includeNumber}onChange={(e)=>{
                setIncludeNumber(e.target.checked);
            }}/>
            <label htmlFor="number">Include Number</label>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" id='special_characters' value={includeSpecial}onChange={(e)=>{
                setIncludeSpecial(e.target.checked);
            }}/>
            <label htmlFor="special_characters">Include Special_characters</label>
        </div>
        <button className="button" onClick={handleClick}>Generate Password</button>
        <div className="generated-password">
            <input type="text" className='input'readOnly value={password}/>
            <button className="copy-btn" onClick={copytoclipboard}>
                Copy
            </button>
        </div>
    </div>
  )
}
