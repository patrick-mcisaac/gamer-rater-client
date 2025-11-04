import { useEffect } from "react"

import { useGames } from "../../hooks/useGames"
import { GamesList } from "./GamesList"

export const Games = () => {
    const { getGames, games } = useGames()

    useEffect(() => {
        getGames()
    }, [])

    return (
        <div className="flex flex-col p-5 justify-center items-center">
            <h1 className="text-[4rem] mt-[2rem] font-semibold tracking-wider">
                Games
            </h1>
            <div className="flex justify-around items-center flex-wrap gap-5 mt-[2.5rem]">
                {games &&
                    games.map((game) => (
                        <GamesList key={game.id} game={game} />
                    ))}
            </div>
        </div>
    )
}
