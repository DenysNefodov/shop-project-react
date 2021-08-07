import React, { useState } from 'react'

const Testimonials = () => {

    const [count, setCount] = useState(1)
    const [color, setColor] = useState("green")

    const toogleColor = () => {
        setColor((value) => (
            value === "red" ? "green" : "red"
        ))
    }


    return (
        <>
            <h1 className="page-title">Testimonials</h1>

            <div>
                Color:{color}
                <div>
                    <button onClick={() => toogleColor()}>Change color</button>
                </div>
            </div>

            <button onClick={() => setCount(count - 1)}>-</button>
            <input type="text" value={count}/>
            <button onClick={() => setCount(count + 1)}>+</button>
        </>
    )
}

export default Testimonials