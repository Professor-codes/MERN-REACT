import React from 'react'
import './Content.css'
import { SubContent } from './SubContent'

const Content = (props) => {

    let langs = [
        {
            id: 1,
            name: "Html",
            type: "Frontend"
        },
        {
            id: 2,
            name: "Css",
            type: "Frontend"
        },
        {
            id: 3,
            name: "Javascript",
            type: "Frontend"
        }
    ]

    return (
        <div>
            <h1 className='content'>Content</h1>
            <p>{props.d.title}</p>
            <p>{props.d.desc}</p>
            <div className='container'>
                {
                    langs.map((lang) => {
                        return (
                            <div className='langs'>
                                <p>{lang.id}</p>
                                <p>{lang.name}</p>
                                <p>{lang.type}</p>
                            </div>
                        )
                    })
                }
            </div>



            <SubContent subdata={props.d} />
        </div>
    )
}

export default Content
