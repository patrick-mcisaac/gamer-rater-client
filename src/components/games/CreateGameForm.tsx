import { useEffect, useState } from "react"
import type { GamesFormType } from "../../types/gameTypes"
import { useCategories } from "../../hooks/useCategories"
import { useGames } from "../../hooks/useGames"

export const CreateGameForm = () => {
    const [game, setGame] = useState<GamesFormType>({
        title: "",
        description: "",
        designer: "",
        year_released: "",
        number_of_players: 0,
        estimated_time_to_play: 0,
        age_recommendation: 0,
        categories: 0
    })

    const { getCategories, categories } = useCategories()
    const { createGame } = useGames()

    useEffect(() => {
        getCategories()
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // TODO: make typescript accept this somehow

        const { name, value, type } = e.target

        if (name in game) {
            if (type === "number") {
                setGame({ ...game, [name]: parseInt(value) })
            }
            if (type === "text") {
                setGame({ ...game, [name]: value })
            }
        }
    }

    const handleSubmit = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault()
        if (
            game.title !== "" &&
            game.description !== "" &&
            game.designer !== "" &&
            game.year_released !== "" &&
            game.estimated_time_to_play > 0 &&
            game.age_recommendation > 0 &&
            game.categories > 0 &&
            game.number_of_players > 0
        ) {
            createGame(game)
        } else {
            window.alert("fill out the form")
        }
    }
    return (
        <div className="flex flex-col mt-10 gap-5 items-center">
            <h1 className="text-center text-3xl">Register a game</h1>
            <form className="flex gap-5 flex-col">
                <fieldset className="flex flex-col">
                    <label htmlFor="title">Title</label>
                    <input
                        onChange={handleChange}
                        className="border pl-2 rounded-lg"
                        type="text"
                        id="title"
                        name="title"
                        value={game.title}
                    />
                </fieldset>
                <fieldset className="flex flex-col">
                    <label htmlFor="description">Description</label>
                    <input
                        onChange={handleChange}
                        className="border pl-2 rounded-lg"
                        type="text"
                        id="description"
                        name="description"
                        value={game.description}
                    />
                </fieldset>
                <fieldset className="flex flex-col">
                    <label htmlFor="designer">Designer</label>
                    <input
                        onChange={handleChange}
                        className="border pl-2 rounded-lg"
                        type="text"
                        id="designer"
                        name="designer"
                        value={game.designer}
                    />
                </fieldset>
                <fieldset className="flex flex-col">
                    <label htmlFor="year_released">Year released</label>
                    <input
                        onChange={handleChange}
                        className="border pl-2 rounded-lg"
                        type="text"
                        id="year_released"
                        name="year_released"
                        value={game.year_released}
                    />
                </fieldset>
                <fieldset className="flex flex-col">
                    <label htmlFor="number_of_players">Number of players</label>
                    <input
                        onChange={handleChange}
                        className="border pl-2 rounded-lg"
                        type="number"
                        id="number_of_players"
                        name="number_of_players"
                        value={game.number_of_players}
                    />
                </fieldset>
                <fieldset className="flex flex-col">
                    <label htmlFor="estimated_time_to_play">
                        Estimated time
                    </label>
                    <input
                        onChange={handleChange}
                        className="border pl-2 rounded-lg"
                        type="number"
                        id="estimated_time_to_play"
                        name="estimated_time_to_play"
                        value={game.estimated_time_to_play}
                    />
                </fieldset>
                <fieldset className="flex flex-col">
                    <label htmlFor="age_recommendation">Recommended age</label>
                    <input
                        onChange={handleChange}
                        className="border pl-2 rounded-lg"
                        type="number"
                        id="age_recommendation"
                        name="age_recommendation"
                        value={game.age_recommendation}
                    />
                </fieldset>
                <fieldset className="flex flex-col">
                    <label htmlFor="categories">Categories</label>
                    <select
                        onChange={(e) =>
                            setGame({
                                ...game,
                                categories: parseInt(e.target.value)
                            })
                        }
                        className="border pl-2 rounded-lg"
                        id="categories"
                        name="categories"
                        value={game.categories}
                    >
                        <option value={0}>select a category</option>
                        {categories?.map((c) => (
                            <option key={c.id} value={c.id}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </fieldset>
                <button
                    onClick={handleSubmit}
                    className="rounded-xl mt-5 hover:scale-105 cursor-pointer hover:bg-gray-900 text-white bg-gray-700"
                >
                    Save
                </button>
            </form>
        </div>
    )
}
