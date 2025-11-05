import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import { Authorized } from "../components/auth/Authorized"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Games } from "../components/games/Games"
import { GamesDetails } from "../components/games/GamesDetails"

export const ApplicationViews = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<Authorized />}>
                    <Route index element={<div>Hey</div>} />
                    <Route path="games" element={<Outlet />}>
                        <Route index element={<Games />} />
                        <Route path=":id" element={<GamesDetails />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
