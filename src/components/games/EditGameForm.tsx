import React, { useEffect, useState } from "react"
import { useCategories } from "../../hooks/useCategories"
import { useGames } from "../../hooks/useGames"
import { useParams } from "react-router-dom"
import type { GamesFormType } from "../../types/gameTypes"

export const EditGameForm = () => {
    const { getCategories, categories } = useCategories()
    const [formGame, setFormGame] = useState<GamesFormType>()
    const { game, getGame, updateGame } = useGames()

    const { id } = useParams()

    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        if (id) {
            getGame(id)
        }
    }, [id])

    useEffect(() => {
        if (game) {
            setFormGame({
                ...game,
                categories: categories ? categories[0].id : 0
            })
        }
    }, [game])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // TODO: make typescript accept this somehow

        const { name, value, type } = e.target
        if (formGame) {
            if (name in formGame) {
                if (type === "number") {
                    setFormGame({ ...formGame, [name]: parseInt(value) })
                }
                if (type === "text") {
                    setFormGame({ ...formGame, [name]: value })
                }
            }
        }
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        if (id && formGame) {
            updateGame(id, formGame)
        }
    }

    return (
        formGame && (
            <div className="flex flex-col mt-10 gap-5 items-center">
                <h1 className="text-center text-3xl">Edit the game</h1>
                <form className="flex gap-5 flex-col">
                    <fieldset className="flex flex-col">
                        <label htmlFor="title">Title</label>
                        <input
                            onChange={handleChange}
                            className="border pl-2 rounded-lg"
                            type="text"
                            id="title"
                            name="title"
                            value={formGame.title}
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
                            value={formGame.description}
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
                            value={formGame.designer}
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
                            value={formGame.year_released}
                        />
                    </fieldset>
                    <fieldset className="flex flex-col">
                        <label htmlFor="number_of_players">
                            Number of players
                        </label>
                        <input
                            onChange={handleChange}
                            className="border pl-2 rounded-lg"
                            type="number"
                            id="number_of_players"
                            name="number_of_players"
                            value={formGame.number_of_players}
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
                            value={formGame.estimated_time_to_play}
                        />
                    </fieldset>
                    <fieldset className="flex flex-col">
                        <label htmlFor="age_recommendation">
                            Recommended age
                        </label>
                        <input
                            onChange={handleChange}
                            className="border pl-2 rounded-lg"
                            type="number"
                            id="age_recommendation"
                            name="age_recommendation"
                            value={formGame.age_recommendation}
                        />
                    </fieldset>
                    <fieldset className="flex flex-col">
                        <label htmlFor="categories">Categories</label>
                        <select
                            onChange={(e) =>
                                setFormGame({
                                    ...formGame,
                                    categories: parseInt(e.target.value)
                                })
                            }
                            className="border pl-2 rounded-lg"
                            id="categories"
                            name="categories"
                            value={formGame.categories}
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
    )
}
