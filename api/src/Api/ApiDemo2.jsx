import axios from 'axios'
import React, { useState } from 'react'
import { Loader } from '../Navbar/Loader'
import { useNavigate } from 'react-router-dom'

export const ApiDemo2 = () => {

  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const addData = async () => {
    setIsLoading(true)

    const userObjToSubmit = {
      name: "Max",
      age: 32,
      email: "Max@google.com",
      isActive: true
    }
    const res = await axios.post("https://node5.onrender.com/user/user", userObjToSubmit)
    console.log(res);
    console.log(res.data);

    if(res.status===201){
      // REDIRECT
      navigate('/project-1')
    }
    else{
      alert("Something went wrong!")
    }

    setIsLoading(false)
  }

  return (
    <div>
      <button onClick={() => { addData() }}>Put data</button>


      <div>
        {
          isLoading && <Loader />
        }
      </div>
    </div>
  )
}
