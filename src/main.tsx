import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { ApplicationViews } from "./views/ApplicationViews"
import { GamesProvider } from "./components/games/GamesProvider"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <GamesProvider>
            <ApplicationViews />
        </GamesProvider>
    </StrictMode>
)
