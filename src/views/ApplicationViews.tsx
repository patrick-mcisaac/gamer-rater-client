import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import { Authorized } from "../components/auth/Authorized"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Games } from "../components/games/Games"
import { GamesDetails } from "../components/games/GamesDetails"
import { CreateGameForm } from "../components/games/CreateGameForm"
import { ReviewForm } from "../components/reviews/ReviewForm"
import { EditGameForm } from "../components/games/EditGameForm"
import { ImageForm } from "../components/gameImage/ImageForm"
import { Home } from "../components/home/Home"

export const ApplicationViews = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<Authorized />}>
                    <Route index element={<Home />} />
                    <Route path="games" element={<Outlet />}>
                        <Route index element={<Games />} />
                        <Route path=":id" element={<Outlet />}>
                            <Route index element={<GamesDetails />} />
                            <Route path="review" element={<ReviewForm />} />
                            <Route path="edit" element={<EditGameForm />} />
                            <Route
                                path="image/upload"
                                element={<ImageForm />}
                            />
                        </Route>
                        <Route path="create" element={<CreateGameForm />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
