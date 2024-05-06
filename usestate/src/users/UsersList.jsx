import React from 'react'

export const UsersList = (props) => {

    const newUser = {
        id: 6,
        title: "Spring Boot",
        type: "Backend"
    }

    return (
        <div>
            <h1 className='userlist'>UsersList</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>TYPE</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.u?.map((user) => {
                            return (
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.title}</td>
                                    <td>{user.type}</td>
                                    <td>
                                        <button onClick={() => { props.d(user.id) }}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <button onClick={()=>{props.a(newUser)}}>Add</button>
        </div>
    )
}
