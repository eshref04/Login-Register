import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router'

const SignUp = () => {

    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")

    const navigate = useNavigate()

    const handleSubmit =(e)=>{
    e.preventDefault()

    axios.post("http://localhost:5000/register",{name,email,password})
    .then(res=>{console.log(res)
      navigate("/login")
    })
    .catch(err=>console.log(err))
    }

  return (
    <div className="container mt-5">
        
       <form onSubmit={handleSubmit} className='bg-dark text-light p-4 rounded-3'>
        <h1 className='text-center mb-2'>Register</h1>
  <div >
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputName1" class="form-label">Name</label>
    <input onChange={(e)=>setName(e.target.value)} type="text" class="form-control" id="exampleInputName1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input onChange={(e)=>setPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  
  )
}

export default SignUp