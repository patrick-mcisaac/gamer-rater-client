import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Authorized } from "../components/auth/Authorized"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Games } from "../components/games/Games"

export const ApplicationViews = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<Authorized />}>
                    <Route index element={<div>Hey</div>} />
                    <Route path="games" element={<Games />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
