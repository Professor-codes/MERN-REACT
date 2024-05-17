import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ProjectLoader } from '../Project/ProjectLoader'

export const ApiDemo4 = () => {

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

    const deleteUser = async (id) => {
        // alert("ID : " + id)

        const res = await axios.delete("https://node5.onrender.com/user/user/" + id)
        console.log(res)

        // REDIRECT TO CURRENT
        if (res.status === 204) {
            getApiData()
        }
    }

    return (
        <div>
            <div>
                {
                    isLoading && <ProjectLoader />
                }
            </div>
            <h1>API DEMO 4</h1>
            <table className='table_data'>
                <thead className='table_head'>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>AGE</th>
                        <th>ACTION</th>
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
                                    <td>
                                        <button onClick={() => { deleteUser(user._id) }}>DELETE</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}










