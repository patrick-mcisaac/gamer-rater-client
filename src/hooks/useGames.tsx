import { useContext } from "react"
import { GamesContext } from "../components/games/GamesContext"

export const useGames = () => {
    const context = useContext(GamesContext)
    if (!context) {
        throw new Error("useGames must be used withing games provider")
    }
    return context
}
