import React, { useState } from 'react'
import './Form.css'
import { useForm } from 'react-hook-form'

export const Mode = () => {

    const [userData, setUserData] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const { register, handleSubmit, formState: { errors } } =
        useForm(
            {
                defaultValues:
                    { name: "DEFAULT_NAME", age: 18 }
            },
            { mode: "onBlur" })

    const submitHandler = (data) => {
        console.log(data)
        setUserData(data)
        setIsSubmit(true)
    }

    const validationSchema = {
        name: {
            required: {
                value: true,
                message: "Name is required"
            },
            minLength: {
                value: 2,
                message: "Name should have atleast 3 characters"
            }
        },
        age: {
            required: {
                value: true,
                message: "Age is required"
            },
            min: {
                value: 18,
                message: "Age should be greater than 18"
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>Name</label>
                    <input type='text' {...register('name', validationSchema.name)} />
                    <span>
                        {
                            errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>
                        }
                    </span>
                </div>
                <div>
                    <label>Age</label>
                    <input type='number' {...register('age', validationSchema.age)} />
                    <spna>
                        {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
                    </spna>
                </div>
                <div>
                    <input type='submit' value="submit" style={{ marginTop: "38px" }} />
                </div>
            </form>

            <div>
                {
                    isSubmit &&
                    <div>
                        <h2>USER DATA</h2>
                        <p>Name : {userData.name}</p>
                        <p>Age : {userData.age}</p>
                    </div>
                }
            </div>
        </div>
    )
}
