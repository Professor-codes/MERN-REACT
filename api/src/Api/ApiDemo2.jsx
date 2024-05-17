import axios from 'axios'
import React, { useState } from 'react'
import { Loader } from '../Navbar/Loader'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ApiDemo2 = () => {

  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const addData = async () => {
    setIsLoading(true)

    const userObjToSubmit = {
      name: "Zudio",
      age: 20,
      email: "zio@gmail.com",
      isActive: true
    }

    const res = await axios.post("https://node5.onrender.com/user/user", userObjToSubmit)
    console.log(res)
    console.log(res.data)

    if (res.status === 201) {
      // REDIRECT
      // navigate('/project-1')

      toast.success('Data added successfully.', {
        position: "bottom-right",
        autoClose: 1600,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })

      setTimeout(() => {
        navigate('/project-1')
      }, 2000)
    }
    else {
      alert("Something went wrong!")
    }

    setIsLoading(false)
  }

  return (
    <div>
      <h1>API DEMO 2</h1>
      <ToastContainer
        position="bottom-right"
        autoClose={1600}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <button onClick={() => { addData() }}>Add data</button>

      <div>
        {
          isLoading && <Loader />
        }
      </div>
    </div>
  )
}
