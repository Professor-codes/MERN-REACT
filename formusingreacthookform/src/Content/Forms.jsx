import React from 'react'
import './Form.css'
import { useForm } from 'react-hook-form'

export const Forms = () => {

  const { register, handleSubmit } = useForm()

  const user_defined_function = (data) => {
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(user_defined_function)}>
        <div>
          <label>User Name</label>
          <input type='text' {...register('username')} />
        </div>
        <div>
          <label>Email</label>
          <input type='email' {...register('email')} />
        </div>
        <div>
          <label>Password</label>
          <input type='password' {...register('password')} />
        </div>
        <div>
          <label>Gender</label>
          <input className='radio' type='radio' name='gender' value='male' {...register('gender')} />M &nbsp;
          <input className='radio' type='radio' name='gender' value='female' {...register('gender')} />F
        </div>
        <hr />
        <div>
          <label>Skills</label>
          <input className='checkbox' type='checkbox' name='skills' value='java' {...register('skills')} />Java &nbsp;
          <input className='checkbox' type='checkbox' name='skills' value='react' {...register('skills')} />React &nbsp;
          <input className='checkbox' type='checkbox' name='skills' value='angular' {...register('skills')} />Angular
        </div>
        <div>
          <label>Date of birth</label>
          <input type='date' {...register('dob')} />
        </div>

        <div>
          <input className='submit' type='submit' value='submit' />
        </div>

      </form>
    </div>
  )
}
