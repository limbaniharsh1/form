import React, { useState } from "react";

function Form() {
    let[name,setname]=useState('')
    let[pass,setpass]=useState('')
    let[onname,setonname]=useState('')
    let[onpass,setonpass]=useState('')
    let handle=(e)=>{
        e.preventDefault()
        setname(onname)
        setpass(onpass)
    }
  return (
    <div>
      <div className="box">
        <form onSubmit={handle}>
          <input type="text" placeholder="Email" onChange={(e)=>setonname(e.target.value)}/>
          <input type="password" placeholder="Password" onChange={(e)=>setonpass(e.target.value)}/>
          <button type="submit">submit</button>
        </form>
      </div>
      <h1>name : {name}</h1>
      <h2>password : {pass}</h2>
    </div>
  );
}

export default Form;
