import React from 'react'
import {render} from 'react-dom'
import App from './container/App'
import './style.scss'

export function renderApp() {
    render(
        <App />,
        document.getElementById('root'))
}

renderApp()