import React from 'react'
import './Content.css'

const Content = () => {

    var name = "World"
    var isActive = true
    var tech = {
        name: "Reactjs",
        type: "Frontend"
    }

    return (
        <div>
            <h1 className='content'>Content</h1>

            <div>
                <h1>Hello {name}</h1>
                <p>{tech.name} : {tech.type}</p>
                <p>Status : {isActive === true ? "Run" : "Terminate"}</p>
            </div>
        </div>
    )
}

export default Content