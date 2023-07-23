import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Welcome from './Welcome'
import Header from '../Dashboard/Header'
const Main = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Welcome />} />
            </Routes>
        </div>
    )
}

export default Main