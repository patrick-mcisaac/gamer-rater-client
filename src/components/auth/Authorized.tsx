import { Navigate, Outlet } from "react-router-dom"
import { Navbar } from "../nav/Navbar"

export const Authorized = () => {
    if (localStorage.getItem("gamer_token"))
        return (
            <>
                <Navbar />
                <main>
                    <Outlet />
                </main>
            </>
        )
    return <Navigate to="/login" replace />
}
