import type React from "react"
import { GamesContext } from "./GamesContext"
import type { GamesType } from "../../types/gameTypes"
import { useState } from "react"

interface Props {
    children: React.ReactNode
}

export const GamesProvider = ({ children }: Props) => {
    const [games, setGames] = useState<GamesType[] | undefined>()

    const getGames = () => {
        const tokenString = localStorage.getItem("gamer_token")

        if (tokenString) {
            fetch(`http://localhost:8000/games`, {
                headers: {
                    Authorization: `Token ${JSON.parse(tokenString).token}`
                }
            })
                .then((res) => res.json())
                .then(setGames)
        }
    }
    return (
        <GamesContext.Provider value={{ getGames, games }}>
            {children}
        </GamesContext.Provider>
    )
}
