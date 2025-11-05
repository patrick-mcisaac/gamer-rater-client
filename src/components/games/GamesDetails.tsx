import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useGames } from "../../hooks/useGames"

export const GamesDetails = () => {
    const { id } = useParams()

    const { game, getGame } = useGames()

    const navigate = useNavigate()

    useEffect(() => {
        // fetch game details
        if (id) {
            getGame(id)
        }
    }, [id])

    return game ?
            <div className="flex flex-col items-center mt-30 gap-5 justify-center">
                <div className="border-gray-500 border-2 text-center rounded-2xl w-[20rem] shadow-2xl shadow-gray-400 p-[1rem_0] flex flex-col justify-around h-[25rem] items-center">
                    <div className="flex flex-col gap-2 items-center">
                        <h1 className="text-3xl font-semibold tracking-wider">
                            {game.title}
                        </h1>
                        <h2 className="text-2xl font-semibold">
                            {game.designer}
                        </h2>
                    </div>
                    <div>
                        <p>Released in {game.year_released.split("-")[0]}</p>
                        <p>{game.number_of_players} Players</p>
                        <p>{game.estimated_time_to_play} minutes to play</p>
                        <p>For ages {game.age_recommendation} +</p>
                    </div>
                    <div>
                        <h3 className="text-xl  font-semibold text-center">
                            Categories
                        </h3>
                        <div className="flex flex-wrap gap-[0_2rem] p-[0_2rem] items-center justify-between">
                            {game.categories.map((c) => (
                                <p key={c.id}>{c.name}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => navigate(`/games/${id}/review`)}
                    className="bg-gray-700 w-20 cursor-pointer h-10 rounded-lg text-white hover:scale-105 hover:bg-gray-900"
                >
                    Review
                </button>
            </div>
        :   <div>
                <h1>Loading....</h1>
            </div>
}
