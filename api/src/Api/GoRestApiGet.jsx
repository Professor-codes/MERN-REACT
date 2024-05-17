import axios from 'axios'
import React, { useState } from 'react'
import { UserLoader } from './UserLoader'

export const GoRestApiGet = () => {

    const [users, setUsers] = useState()
    const [loader, setLoader] = useState(false)

    

    const getApi = async () => {

        try {
            setLoader(true)
            const res = await axios.get("https://gorest.co.in/public/v2/users", {
                headers: {
                    "Authorization": "Bearer be2b92b918e4d18c5d7dd488d4f61e6528db671d3d14d3348f07f0615b8fca59",
                }
            })

            // console.log(res.data);
            setUsers(res.data)
            setLoader(false)
        } catch (error) {
            // error
        }
    }

    // useEffect(() => {
    //     getApi()
    // }, [])

    return (
        <div>
            <div>
                {
                    loader && <UserLoader />
                }
            </div>

            <h1>Go Rest Api</h1>

            <button onClick={() => { getApi() }}>GET</button>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>GENDER</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user) => {
                            return (
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
