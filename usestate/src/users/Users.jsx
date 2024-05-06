import React, { useState } from 'react'
import './Users.css'
import { UsersList } from './UsersList'

export const Users = () => {

  const [users, setUsers] = useState([
    {
      id: 1,
      title: "Javascript",
      type: "Frontend"
    },
    {
      id: 2,
      title: "Java",
      type: "Backend"
    },
    {
      id: 3,
      title: "React",
      type: "Frontend"
    },
    {
      id: 4,
      title: "Angular",
      type: "Frontend"
    },
    {
      id: 5,
      title: "MySQL",
      type: "Database"
    }
  ])

  const deleteUser = (id) => {
    // alert("Id : " + id)
    let updateuser = users.filter((user) => {
      return user.id !== id
    })
    setUsers(updateuser)
  }

  const addUser = (user) => {
    alert("User added.")
    setUsers([...users, user])
  }

  return (
    <div>
      <h1 className='users'>Users</h1>
      <UsersList u={users} d={deleteUser} a={addUser} />

    </div>
  )
}
