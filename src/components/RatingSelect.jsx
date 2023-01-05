import React from 'react'
import { useState } from 'react'


function RatingSelect({ select }) {
    const [selected, setSelected] = useState(5)

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }

    // Creating component with list

    let list = []

    for (let index = 0; index < 11; index++) {

        list.push(
            <li key={index}>
                <input
                    type='radio'
                    id={`num${index}`}
                    name='rating'
                    value={index}
                    onChange={handleChange}
                    checked={selected === index}
                />
                <label htmlFor={`num${index}`}>{index}</label>
            </li>

        )
    }


    return (
        <ul className='rating'>
            {list}
        </ul>
    )
}

export default RatingSelect

/*

//O trecho de código abaixo funciona també, no lugar do FOR
// sendo colocado no lugar de {list}
{Array.from({ length: 10 }, (_, index) =>

                <li key={index}>
                    <input
                        type='radio'
                        id={`num${index}`}
                        name='rating'
                        value={index}
                        onChange={handleChange}
                        checked={selected === index}
                    />
                    <label htmlFor={`num${index}`}>{index}</label>
                </li>

            )}

*/