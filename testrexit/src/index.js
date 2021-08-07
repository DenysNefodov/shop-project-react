import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from "./App/App"
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import { productLikeReducer } from './redux/productLikeReducer'

const store = createStore(
    productLikeReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )




ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>, document.getElementById("root"))