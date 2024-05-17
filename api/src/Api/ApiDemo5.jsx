import axios from 'axios'
import React, { useState } from 'react'
import { Loader } from '../Navbar/Loader'

export const ApiDemo5 = () => {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getApiData = async () => {
        setIsLoading(true)
        const users = await axios.get("https://node5.onrender.com/user/user")
        // console.log(users.data)
        // console.log(users.status)
        setUsers(users.data.data)
        setIsLoading(false)
    }

    const filterUser = async (event) => {

        console.log(event.target.value);
        try {
            const res = await axios.get("https://node5.onrender.com/user/filter", {
                params: {
                    name: event.target.value
                }
            })
            setUsers(res.data.data)
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>API DEMO 5</h1>
            <div>
                <input type='text' onChange={(event) => { filterUser(event) }} placeholder='Search user' />
            </div>
            <div>
                <button onClick={() => { getApiData() }}>Get data</button>
            </div>

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
