import React from 'react'

export const AlertCall = (props) => {
    return (
        <div>
            <h1 className='alertcall'>AlertCall</h1>
            
            <div>
                <button onClick={() => { props.t() }}>Click</button>
            </div>
        </div>
    )
}
