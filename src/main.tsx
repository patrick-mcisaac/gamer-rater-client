import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { ApplicationViews } from "./views/ApplicationViews"
import { GamesProvider } from "./components/games/GamesProvider"
import { CategoriesProvider } from "./components/categories/CategoriesProvider"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <CategoriesProvider>
            <GamesProvider>
                <ApplicationViews />
            </GamesProvider>
        </CategoriesProvider>
    </StrictMode>
)
