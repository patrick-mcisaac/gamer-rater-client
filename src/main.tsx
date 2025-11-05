import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { ApplicationViews } from "./views/ApplicationViews"
import { GamesProvider } from "./components/games/GamesProvider"
import { CategoriesProvider } from "./components/categories/CategoriesProvider"
import { ReviewProvider } from "./components/reviews/ReviewProvider"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <CategoriesProvider>
            <ReviewProvider>
                <GamesProvider>
                    <ApplicationViews />
                </GamesProvider>
            </ReviewProvider>
        </CategoriesProvider>
    </StrictMode>
)
