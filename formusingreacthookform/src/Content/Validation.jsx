import React from 'react'
import './Form.css'
import { useForm } from 'react-hook-form'

export const Validation = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    console.log("Error", errors)

    const submitHandler = (data) => {
        console.log(data) 
    }

    // validation object for Age
    const validationSchema = {
        age: {
            required: {
                value: true,
                message: "age is required"
            },
            min: {
                value: 18,
                message: "age should be greater than 18!"
            }
        },
        address: {
            required: {
                value: true,
                message: "address is required"
            },
            minLength: {
                value: 5,
                message: "Address should be greater than 5"
            },
            maxLength: {
                value: 10,
                message: "Address should be greater than 10"
            }
        },
        contact: {
            required: {
                value: true,
                message: "contact is required"
            },
            pattern: {
                value: /^[6-9]{1}[0-9]{9}$/,
                message: "contact should be valid!"
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>Name</label>
                    <input type='text' {...register("name", { required: { value: true, message: "name is required" } })} />
                    {
                        errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>
                    }
                </div>
                <div>
                    <label>Age</label>
                    <input type='number' {...register("age", validationSchema.age)} />
                    {
                        errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>
                    }
                </div>
                <div>
                    <label>Address</label>
                    <input type='text' {...register("address", validationSchema.address)} />
                    {
                        errors?.address && <p style={{ color: "red" }}>{errors.address.message}</p>
                    }
                </div>
                <div>
                    <label>Contact</label>
                    <input type='number' {...register("contact", validationSchema.contact)} />
                    {
                        errors?.contact && <p style={{ color: "red" }}>{errors.contact.message}</p>
                    }
                </div>
                <div>
                    <input className='submit' type='submit' value='submit' />
                    <input className='submit' type='reset' value='Reset' onClick={() => reset()} />
                </div>

            </form>
        </div>
    )
}
