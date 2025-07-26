'use client'

import { useState } from "react";
import './globals.css';

export default function Home() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(true);
  const handleDecrease = () => {
    if(count == 0){
      setCount(0);
    }
    else{
      setCount(count - 1);
    }
  }
    const handleIncrease = () => {
    setCount(count + 1);
  }

  const handleToogleTheme = () => {
    if(theme){
      setTheme(false);
    }
    else{
      setTheme(true)
    }
    
  }
  return (
    <div className={`${theme?'themeLight':'themeDark'}`}>
      <h1 style={{display:'flex'}}>hello</h1>
      <div style={{display:"flex"}}>
        <button style={{margin:'10px', width:"40px", height:"30px", alignItems:'center', borderRadius:'50px'}} onClick={handleDecrease}>-</button>
        <h3>{count}</h3>
        <button style={{margin:'10px', width:"40px", height:"30px", alignItems:'center', borderRadius:'50px'}} onClick={handleIncrease}>+</button>
      </div>

      <div style={{display:'flex'}}>
        <h3>Theme : </h3>
        <button style={{margin:'10px', width:"140px", height:"40px", alignItems:'center', borderRadius:'50px'}} onClick={handleToogleTheme}>{`${theme?'Switch Dark':'Switch Light'}`}</button>
      </div>
    </div>
  );
}
