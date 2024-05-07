import React from 'react'
import { Link, useParams } from 'react-router-dom'

export const AboutCompany = () => {

    const id = useParams().id

    const arr = [
        {
            id: 4,
            name: "Software"
        },
        {
            id: 5,
            name: "Hardware"
        }
    ]

    return (
        <div>
            <div>
                <h1>AboutCompany {"[" + id + "]"}</h1>
                <p className='p-project'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sapiente quisquam nulla inventore optio! Quos neque quisquam voluptas ex voluptatem consectetur aspernatur consequatur assumenda eveniet suscipit quibusdam magni aut cum, nulla vero tempora accusamus porro tenetur eius, laudantium harum impedit itaque corporis modi. Eligendi ullam mollitia dolorem expedita commodi voluptatibus ipsum, amet sint dolorum non soluta quos repellendus aliquid pariatur laborum, culpa tempora autem doloremque nam. Laudantium quae reprehenderit, doloremque ut ullam voluptates distinctio accusamus, officiis nesciunt obcaecati voluptatibus non. Cupiditate maxime ipsum ex iste quas rem unde saepe praesentium quis voluptatem corrupti facere sed, debitis quos voluptas asperiores autem laborum, non porro vel nesciunt quam assumenda fugiat eius! Magni praesentium ratione harum similique. Vel aliquam tempore corporis, rerum a porro. Natus fuga unde error corporis a qui ea illo quam ipsam officiis, magnam laudantium architecto voluptate, accusamus repudiandae voluptatibus blanditiis velit perspiciatis hic quasi ad. Incidunt quam, dolores minus sed reprehenderit eaque iure unde neque quibusdam adipisci perferendis alias asperiores nam recusandae magni ut molestiae dolorem optio? Aliquam enim recusandae porro corporis eum blanditiis necessitatibus dolores commodi illum officia? Adipisci, iure fugit pariatur similique ab suscipit accusantium aliquam hic! Quasi fuga tempora facere cum omnis est suscipit modi necessitatibus.</p>
            </div>
            <div>
                {
                    arr.map((ar) => {
                        return (
                            <div className='nest-nest-div'>
                                <Link className='link' to={`/about/about-company/${ar.id}`}>{ar.name}</Link>
                            </div>
                        )
                    })
                }
            </div>
            <div className='btn-back'>
                <Link to="/about">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M249.38 336L170 256l79.38-80m-68.35 80H342" /><path fill="none" stroke="white" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z" /></svg>
                </Link>
            </div>
        </div>
    )
}
