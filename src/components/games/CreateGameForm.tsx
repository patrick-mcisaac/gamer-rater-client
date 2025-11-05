import { useState } from "react"
import type { GamesFormType } from "../../types/gameTypes"

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
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-center text-3xl">Register a game</h1>
            <form className="flex flex-col">
                <fieldset className="flex flex-col">
                    <label htmlFor="title">Title</label>
                    <input
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
                        className="border pl-2 rounded-lg"
                        id="categories"
                        name="categories"
                        value={game.categories}
                    >
                        <option value={0}>select a category</option>
                    </select>
                </fieldset>
            </form>
        </div>
    )
}
