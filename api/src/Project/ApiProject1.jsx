import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ProjectLoader } from '../Project/ProjectLoader'

export const ApiProject1 = () => {

  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getApiData = async () => {
    setIsLoading(true)

    const users = await axios.get("https://node5.onrender.com/user/user")
    setUsers(users.data.data)

    setIsLoading(false)
  }

  useEffect(() => {

    getApiData()

  }, [])

  return (
    <div>
      <h1>USE EFFECT DEMO</h1>
      <table className='table_data'>
        <thead className='table_head'>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>AGE</th>
          </tr>
        </thead>

        <tbody>
          {
            users?.map((user) => {
              return (
                <tr>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div>
        {
          isLoading && <ProjectLoader />
        }
      </div>
    </div>
  )
}
