
import React, { useEffect } from 'react'
import {useState} from 'react';
import '../Assests/css/core.css';
import { getUserId } from '../services/api';
// import { EditUser } from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';
const EditUser=()=> {
  const {id}=useParams()
  console.log(id)
  const navigate=useNavigate()
    const [data,setData]=useState({
        username:'',
        password:''
    })
  const fetchUser=async()=>
  {
    try{
    
    const res=await getUserId(id)
    setData(res.data)
  }
  catch(e)
  {
console.log(e)
  }
}
    const handleChage=(e)=>
    {
  setData({...data,[e.target.id]:e.target.value})
    }
    const handleSubmit=async(e)=>
    {
        e.preventDefault();
        // console.log(data)
    try{
      const res2=await EditUser(id,data)
      console.log(res2.status)
      {
        if(res2.status===200)
        {
          alert('user updated')
          navigate('/')
        }
      }
    }
    catch(e)
    {
      console.log(e)
    }

  }
    useEffect(()=>
    {
      fetchUser()
    },[])
    console.log(data)
  return (
   <form onSubmit={handleSubmit}>
    <input type ='text' value={data.username} id='username' placeholder='username'onChange={handleChage}/>
    <input type ='password' value={data.password} id='password' placeholder='password'onChange={handleChage}/>
    <button type='submit' className='submit-btn'>Add</button>
   </form>
  )
}

export default EditUser
