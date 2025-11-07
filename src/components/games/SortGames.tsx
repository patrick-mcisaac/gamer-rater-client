import { useState } from "react"
import { useGames } from "../../hooks/useGames"

export const SortGames = () => {
    const [sort, setSort] = useState<string>("")

    const { sortGames } = useGames()

    return (
        <div className="flex gap-2">
            <select
                className="rounded border cursor-pointer "
                onChange={(e) => {
                    setSort(e.target.value)
                }}
            >
                <option value="">Sort</option>
                <option value="year">Year Released</option>
                <option value="time">Time to play</option>
                <option value="designer">Designer</option>
            </select>
            <button
                className="border rounded w-10 cursor-pointer hover:scale-105"
                onClick={() => {
                    sortGames(sort)
                }}
            >
                Sort
            </button>
        </div>
    )
}
