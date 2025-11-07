import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { ApplicationViews } from "./views/ApplicationViews"
import { GamesProvider } from "./components/games/GamesProvider"
import { CategoriesProvider } from "./components/categories/CategoriesProvider"
import { ReviewProvider } from "./components/reviews/ReviewProvider"
import { RatingsProvider } from "./components/ratings/RatingsProvider"
import { ImageProvider } from "./components/gameImage/ImageProvider"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <CategoriesProvider>
            <ImageProvider>
                <RatingsProvider>
                    <ReviewProvider>
                        <GamesProvider>
                            <ApplicationViews />
                        </GamesProvider>
                    </ReviewProvider>
                </RatingsProvider>
            </ImageProvider>
        </CategoriesProvider>
    </StrictMode>
)
