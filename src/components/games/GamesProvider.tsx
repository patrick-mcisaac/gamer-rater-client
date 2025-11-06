import type React from "react"
import { GamesContext } from "./GamesContext"
import type { GamesFormType, GamesType } from "../../types/gameTypes"
import { useState } from "react"

interface Props {
    children: React.ReactNode
}

export const GamesProvider = ({ children }: Props) => {
    const [games, setGames] = useState<GamesType[] | undefined>()
    const [game, setGame] = useState<GamesType | undefined>()

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

    const getGame = (id: string) => {
        const tokenString = localStorage.getItem("gamer_token")

        if (tokenString) {
            fetch(`http://localhost:8000/games/${id}`, {
                headers: {
                    Authorization: `Token ${JSON.parse(tokenString).token}`
                }
            })
                .then((res) => res.json())
                .then(setGame)
        }
    }

    const createGame = (data: GamesFormType, tokenString: string) => {
        return fetch(`http://localhost:8000/games`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${JSON.parse(tokenString).token}`
            },
            body: JSON.stringify(data)
        })
    }

    const updateGame = (id: string, body: GamesFormType) => {
        const tokenString = localStorage.getItem("gamer_token")

        if (tokenString) {
            return fetch(`http://localhost:8000/games/${id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Token ${JSON.parse(tokenString).token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })
        }
    }
    return (
        <GamesContext.Provider
            value={{ getGames, games, game, getGame, createGame, updateGame }}
        >
            {children}
        </GamesContext.Provider>
    )
}
