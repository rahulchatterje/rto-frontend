import React from 'react'
import { useState ,useCallback,useEffect,useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Pass() {

    const [length, setLength] = useState(8)
    const [num, setNum] = useState(false)
    const [char, setChar] = useState(false)
    const [pass, setPass] = useState('')

const genPass=useCallback(()=>{
    let p=""
    let str="ABCDEFGabcdet"
    if(num)
    str+="012313133"

    if(char)
    str+="@!#$"

    for(let i=1;i<length;i++){
      const cMath=Math.floor(Math.random()*str.length+1)
      p+=str.charAt(cMath)
    }
    setPass(p)
},[length,num,char])

useEffect(()=>{
    genPass()
    },[length,num,char])

    const copypass=()=>{
        window.navigator.clipboard.writeText(pass)
        passref.current.select()
    }

    const passref=useRef()
  return (
    <>
    <div>
      <h1>Password Generator</h1>
      <input type='text' 
      value={pass}
      readOnly 
      ref={passref}
      />
      <button onClick={copypass}>copy</button>

    </div>
    <div>
    <input type='range'  
    
    onChange={e=>setLength(e.target.value)}
    value={length}
    />
     <label>Length:{length}</label>
    </div>
    <div>
    <input type='checkbox'  
    defaultChecked={num}
    
    onChange={()=>setNum((prev)=>!prev)}
   
    />
     <label>Numbers</label>
    </div>

    <div>
    <input type='checkbox'  
    defaultChecked={char}
    
    onChange={()=>setChar((prev)=>!prev)}
   
    />
     <label>Char</label>
    </div>
    </>
  )
}

export default Pass
