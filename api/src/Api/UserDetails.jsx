import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserLoader } from './UserLoader'

export const UserDetails = () => {

    const id = useParams().id
    // alert(id)
    const [users, setUsers] = useState({})
    const [loader, setLoader] = useState(false)

    const getUserById = async () => {
        setLoader(true)

        const res = await axios.get("https://node5.onrender.com/user/user/" + id)
        console.log(res.data)
        // console.log(res.status)
        setUsers(res.data.data);
        setLoader(false)
    }

    useState(() => {
        getUserById()

    }, [])

    return (
        <div>
            <div>
                {
                    loader === true && <UserLoader />
                }
            </div>
            <h1>UserDetails</h1>
            <div className='user-data'>
                <p>{users._id}</p>
                <p>{users.name}</p>
                <p>{users.age}</p>
                <p>{users.email}</p>
            </div>
        </div>
    )
}
