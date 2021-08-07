import React, { useState } from 'react'

const Testimonials = () => {

    const [count, setCount] = useState(1)
    const [color, setColor] = useState("green")


    return (
        <>
            <h1 className="page-title">Testimonials</h1>

            <div>
                Color:{color}
                <div>
                    <button onClick={() => setColor("red")}>Change color</button>
                </div>
            </div>

            <button onClick={() => setCount(count - 1)}>-</button>
            <input type="text" value={count}/>
            <button onClick={() => setCount(count + 1)}>+</button>
        </>
    )
}

export default Testimonials