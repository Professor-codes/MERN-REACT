import axios from 'axios'
import React from 'react'

export const GoRestApiPost = () => {

    const postApi = async () => {

        const user = {
            name: "Eline",
            email: "Eline@outlook.com",
            gender: "female",
            status: "active"
        }

        try {

            const res = await axios.post("https://gorest.co.in/public/v2/users", user, {
                headers:{
                    "Authorization":"Bearer be2b92b918e4d18c5d7dd488d4f61e6528db671d3d14d3348f07f0615b8fca59"
                }
            })

            console.log(res.data)

        } catch (error) {

            console.log(error)

        }
    }


    return (
        <div>
            <h1>GoRestApiPost</h1>

            <button onClick={() => { postApi() }}>POST</button>
        </div>
    )
}
