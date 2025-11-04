import { Link } from "react-router-dom"
import type { GamesType } from "../../types/gameTypes"

interface GamesListProps {
    game: GamesType
}
export const GamesList = ({ game }: GamesListProps) => {
    return (
        <div className=" h-[5rem] w-[20rem] shadow-xl flex justify-center items-center border rounded-xl ">
            <Link to={`/games/${game.id}`}>
                <h1 className="text-lg">{game.title}</h1>
            </Link>
        </div>
    )
}
