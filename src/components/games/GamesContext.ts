import { createContext } from "react"
import type { GamesContextType } from "../../types/gameTypes"

export const GamesContext = createContext<GamesContextType | undefined>(
    undefined
)
