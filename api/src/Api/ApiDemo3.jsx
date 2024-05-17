import axios from 'axios'
import React, { useState } from 'react'
import { Loader } from '../Navbar/Loader'

export const ApiDemo3 = () => {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getApiData = async () => {
        setIsLoading(true) // TRUE BEFORE LOAD DATA
        const users = await axios.get("https://node5.onrender.com/user/user") // GET API
        console.log(users.data) // DATA FROM API
        console.log(users.status) // STATUS OF API
        setUsers(users.data.data) // SET DATA FROM API
        setIsLoading(false) // FALSE AFTER SET DATA
    }

    return (
        <div>
            <h1>API DEMO 3</h1>
            <button onClick={() => { getApiData() }}>Get data</button>
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
                    isLoading && <Loader />
                }
            </div>

        </div>
    )
}
