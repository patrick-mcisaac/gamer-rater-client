import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useGames } from "../../hooks/useGames"

export const GamesDetails = () => {
    const { id } = useParams()

    const { game, getGame } = useGames()

    useEffect(() => {
        // fetch game details
        if (id) {
            getGame(id)
        }
    }, [id])

    return (
        <div className="border-gray-500 border-2 rounded-2xl w-[30rem] shadow-2xl shadow-gray-400 m-[8rem_auto] p-20 flex flex-col gap-4 justify-center items-center">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-semibold tracking-wider">Title</h1>
                <h2 className="text-2xl">Designer</h2>
            </div>
            <p>Year released</p>
            <p>Players</p>
            <p>Time to play</p>
            <p>age recommendation</p>
            <p>Categories</p>
        </div>
    )
}
