import React from 'react'
import {useState} from 'react';
import { addUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Adduser=()=> {
  const navigate=useNavigate()
    const [data,setData]=useState({
        username:'',
        password:''
    })
    const handleChage=(e)=>
    {
  setData({...data,[e.target.id]:e.target.value})
    }
    const handleSubmit=async(e)=>
    {
     e.preventDefault();
    try{
        const  res=await addUser(data)
        if(res.status==201)
        {
          alert('user added')
          navigate('/')
        }
    }
        catch(e)
        {
        console.log(data)
    }
  }
  return (
    
   <form className='frm'onSubmit={handleSubmit}>
    <input type ='text' id='username' placeholder='username'onChange={handleChage}/>
    <input type ='text' id='password' placeholder='password'onChange={handleChage}/>
    <button type='submit' className='submit-btn'>ADD</button>
   </form>
  )
}

export default Adduser
