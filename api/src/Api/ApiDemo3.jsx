import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const ApiDemo3 = () => {

    const { register, handleSubmit } = useForm()
    
    const [user, setUser] = useState({
        name: "",
        email: "",
        age: ""
    })

    const submitHandler = (data) => {

    }

    return (
        <div>
            <h1>Api Demo 3</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>Name</label>
                    <input type="name" {...register("name")} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" {...register("email")} />
                </div>
                <div>
                    <label>Age</label>
                    <input type="text" {...register("age")} />
                </div>
                <div>
                    <input type="submit" value="Add data" />
                </div>
            </form>
        </div>
    )
}
