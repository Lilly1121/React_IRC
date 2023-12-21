import axios from 'axios'
// import {getUser} from '../services/api'
const URL="http://localhost:3000"

const getUser=()=>axios.get(`${URL}/User`)
const getUserId=(id) =>axios.get(`${URL}/User/${id}`)
const addUser=(data)=>axios.post(`${URL}/User`,data)
const EditUser=(id,data)=>axios.put(`${URL}/User/${id}`,data)
const deleteUser=(id)=>axios.delete(`${URL}/User/${id}`)
export {getUser,
 getUserId,
 addUser,
 EditUser,
 deleteUser
}