import React from 'react'
import ReactDOM from 'react-dom'

// const h1 = <h1 id="test1">Hello</h1>

const Text = () => {
    return (
        <React.Fragment>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, esse!</p>
        </React.Fragment>
    )
}
const List = () => {
    return (
        <ul>
            <li>Lorem, ipsum dolor.</li>
            <li>Mollitia, quis vitae.</li>
            <li>Laborum, exercitationem vel.</li>
            <li>Et, doloribus. Inventore?</li>
            <li>Doloremque, molestiae saepe.</li>
        </ul>
    )
}

const Hi = () => {
    return (
        <React.Fragment>
            <h1>Hiiiiii</h1>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <>
            <Text/>
            <List/>
            <Hi/>
        </>
    )
}




ReactDOM.render(<App/>, document.getElementById("root"))