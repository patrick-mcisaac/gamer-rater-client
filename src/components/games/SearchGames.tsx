import { useState } from "react"
import { useGames } from "../../hooks/useGames"

export const SearchGames = () => {
    const [search, setSearch] = useState<string>("")

    const { searchGames } = useGames()
    return (
        <input
            type="text"
            className="rounded border pl-2"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={(e) => {
                if (e.key === "Enter") {
                    searchGames(search)
                }
            }}
        />
    )
}
