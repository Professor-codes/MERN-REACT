import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const ApiProject2 = () => {

    const [movies, setMovies] = useState()

    const getMoviesData = async () => {
        const res = await axios.get("https://moviesdatabase.p.rapidapi.com/titles/search/title/Titanic", {
            headers: {
                'X-RapidAPI-Key': '5780ff1503msha36d42ac21c82b8p10bbc1jsn96963144dcfc',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        })

        console.log(res.data);
    }

    useEffect(() => {
        getMoviesData()
        setMovies(movies.data)
    }, [])


    return (
        <div>
            <h1>Project - 2</h1>

            {
                movies.map((t) => {
                    return (
                        <div>
                            <table className='table_data'>
                                <thead className='table_head'>
                                    <tr>
                                        <th>ID</th>
                                        <th>TITLE</th>
                                        <th>COMPLETED</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        movies?.map((t) => {
                                            return (
                                                <tr>
                                                    <td>{t.id}</td>
                                                    <td>{t.title}</td>
                                                    <td><p style={{"color":"red"}}>{t.completed===true ? "True" : "False"}</p></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
                })
            }
        </div>
    )
}
