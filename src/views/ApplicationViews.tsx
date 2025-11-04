import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Authorized } from "../components/auth/Authorized"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"

export const ApplicationViews = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<Authorized />}>
                    <Route path="/" element={<div>Hey</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
