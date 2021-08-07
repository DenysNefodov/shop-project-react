import React, { useState } from 'react'

const Testimonials = () => {

    const arrTestimonials = [
        {name:"Ярослав", text: "Начиная с распаковки, ноут упакован в красувую фирменную упаковку rog. Сама коробка была уже немножко потертая затем обклеена пленкой. Доставка курьером заняла 1 день. "},
        {name: "Denys", text: "USB 3.0 роз'єми тільки з одного боку."}
    ]

    const [testimonials, setTestimonials] = useState(arrTestimonials)

    const [newTestimonials, setNewTestimonials] = useState({
        name:"",
        text:"",
    })

    const handleNameChange = (e) => {
        setNewTestimonials((value) => ({
            ...value,
            name:e.target.value
        }))
    }

    const handleTextChange = (e) => {
        setNewTestimonials((value) => ({
            ...value,
            text:e.target.value
        }))
    }

    const sendForm = (e) => {
        e.preventDefault();
        setTestimonials(value => {
            return [...value, newTestimonials]
        })
    }

    return (
        <>
            <h1 className="page-title">Testimonials</h1>

        {
            testimonials.map((item, i) => (
                <div key={i}
                style={{
                    backgroundColor:"rgba(255, 255, 255, .75",
                    padding:"10px",
                }}>
                    <div style={{marginBottom:"10px"}}>Name: {item.name}</div>
                    <div style={{marginBottom:"10px"}}>Message text: {item.text}</div>
                </div>
            ))
        }

        <form onSubmit={sendForm}
            style={{
                marginTop:"40px"
            }}
        >
            <div>
                <input
                    type="text"
                    placeholder="Name:"
                    value={newTestimonials.name}
                    onChange={handleNameChange}
                />
            </div>
            <div>
                <textarea
                    cols="30" rows="10"
                    placeholder="Message:"
                    value={newTestimonials.text}
                    onChange={handleTextChange}
                ></textarea>
            </div>

        <button>Send</button>
        </form>

        </>
    )
}

export default Testimonials