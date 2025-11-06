import { useEffect, useState } from "react"
import { useRatings } from "../../hooks/useRatings"
import type { RatingsType } from "../../types/ratingTypes"
import { useParams } from "react-router-dom"
import { useGames } from "../../hooks/useGames"

export const Ratings = () => {
    const { id } = useParams()
    const [rating, setRating] = useState<RatingsType>({
        rating: 0,
        game: 0
    })

    const { createRating, userRating, getUserRating, updateUserRating } =
        useRatings()
    const { getGame } = useGames()

    useEffect(() => {
        const token = localStorage.getItem("gamer_token")
        if (id && token) {
            setRating({ ...rating, game: parseInt(id) })
            getUserRating(id, token)
        }
    }, [id])

    useEffect(() => {
        if (userRating && userRating[0]?.rating) {
            setRating({ ...rating, rating: userRating[0].rating })
        }
    }, [userRating])

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        if (rating.rating > 0) {
            const token = localStorage.getItem("gamer_token")
            if (userRating && id && token) {
                if (userRating[0]?.id) {
                    updateUserRating(userRating[0].id, rating, token)
                        .then(() => getUserRating(id, token))
                        .then(() => getGame(id))
                } else {
                    createRating(rating, token)
                        .then(() => getUserRating(id, token))
                        .then(() => getGame(id))
                }
            }
        }
    }

    return (
        <div className="flex flex-col gap-2 w-20 md:w-50 items-center">
            <input
                className="w-full"
                onChange={(e) =>
                    setRating({ ...rating, rating: parseInt(e.target.value) })
                }
                type="range"
                min={1}
                max={10}
                value={rating.rating}
            />

            <button
                onClick={handleSubmit}
                className="bg-gray-700 h-10 w-full cursor-pointer rounded-lg  text-white hover:scale-105 hover:bg-gray-900"
            >
                {rating.rating} stars
            </button>
        </div>
    )
}
