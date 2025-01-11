import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const [value, setvalue ]= useState("")
const navigate = useNavigate()
    const handlejoinroom = useCallback(()=>{
        navigate(`/chat/${value}`)
    },[navigate,value])
  return (
    <div className='box'>
        <input type="text" value={value} onChange={(e)=>setvalue(e.target.value)} placeholder='join the room' />
        <button onClick={handlejoinroom}>join</button>
    </div>
  )
}

export default Home