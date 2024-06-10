import React, { useState } from 'react'
import './SelectData.css'

export const SelectData = (props) => {

    const [country, setCountry] = useState()

    return (
        <div>
            <h1 className='header'>COUNTRY DATA</h1>
            <div className="container">
                <select
                    value={country}
                    className='select_country'
                    onChange={(e) => {
                        setCountry(e.target.value)
                    }}>
                    {
                        props.data.map((item, index) => {
                            return (
                                <option value={index}>{item.name}</option>
                            )
                        })
                    }
                </select>

                {
                    country > 0 &&
                    <select
                        value={country}
                        className='select_city'>
                        {
                            props.data[country]?.city.map((item, index) => {
                                return (
                                    <option value={index}>{item}</option>
                                )
                            })
                        }
                    </select>
                }
            </div>
        </div>
    )
}
