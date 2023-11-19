import React from'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Main from './components/Main'
const App = () => (
    <>
        <Navbar />
        <Main />
    </>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
