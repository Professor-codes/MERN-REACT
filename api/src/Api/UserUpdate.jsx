import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import './Form.css'

export const UserUpdate = () => {

  const id = useParams().id
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm({
    defaultValues: async () => {
      const res = await axios.get("https://node5.onrender.com/user/user/" + id)

      return ({
        name: res?.data.data.name,
        email: res?.data.data.email,
        age: res?.data.data.age,
        isActive: res?.data.data.isActive ? true : false
      })
    }
  })

  const submitHandler = async(data) => {
    console.log(data)
    const res = await axios.put("https://node5.onrender.com/user/user/"+id, data)
    console.log(res.data.data)
    console.log(res.status)

    if(res.status === 200){
      navigate('/project-1')
    }else{
      alert("Something went wrong!")
    }
  }

  return (
    <div>
      <h1>UserUpdate</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Name</label>
          <input type='text' {...register("name")} />
        </div>
        <div>
          <label>Email</label>
          <input type='text' {...register("email")} />
        </div>
        <div>
          <label>Age</label>
          <input type='text' {...register("age")} />
        </div>
        <div>
          <label>Status</label>
          <input type='text' {...register("isActive")} />
        </div>

        <div>
          <input type='submit' value='Update'/>
        </div>
      </form>
    </div>
  )
}
