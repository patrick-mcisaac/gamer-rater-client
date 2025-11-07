import { useEffect } from "react"

import { useGames } from "../../hooks/useGames"
import { GamesList } from "./GamesList"
import { useNavigate } from "react-router-dom"
import { SearchGames } from "./SearchGames"
import { SortGames } from "./SortGames"

export const Games = () => {
    const { getGames, games } = useGames()

    const navigate = useNavigate()

    useEffect(() => {
        getGames()
    }, [])

    return (
        <div className="flex flex-col p-5 md:gap-10 justify-center items-center">
            <div className="flex items-center justify-around w-full">
                <SearchGames />
                <SortGames />
            </div>
            <h1 className="text-[4rem] mt-[2rem] font-semibold tracking-wider">
                Games
            </h1>
            <button
                onClick={() => navigate("/games/create")}
                className=" mt-3  rounded-xl  h-10 w-40 cursor-pointer bg-gray-700 text-white hover:bg-gray-900 hover:scale-105 transition"
            >
                Register New Game
            </button>
            <div className="flex justify-around items-center flex-wrap gap-5 md:gap-10 mt-[2.5rem]">
                {games &&
                    games.map((game) => (
                        <GamesList key={game.id} game={game} />
                    ))}
            </div>
        </div>
    )
}
