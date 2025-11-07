import { useEffect, useRef, useState } from "react"
import { useReviews } from "../../hooks/useReviews"
import type { ReviewType } from "../../types/reviewTypes"
import { useNavigate, useParams } from "react-router-dom"

export const ReviewForm = () => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const { id } = useParams()

    const navigate = useNavigate()

    const [review, setReview] = useState<ReviewType>({
        review: "",
        game: 0
    })

    const { createReview } = useReviews()

    useEffect(() => {
        textAreaRef.current?.focus()
    }, [])

    useEffect(() => {
        if (id) {
            setReview({ ...review, game: parseInt(id) })
        }
    }, [id])

    const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const token = localStorage.getItem("gamer_token")

        if (review.review !== "" && review.game > 0 && token) {
            createReview(review, token).then(() => navigate(`/games/${id}`))
        }
    }
    return (
        <form className="flex flex-col justify-center items-center pt-30 md:pt-50">
            <fieldset>
                <textarea
                    onChange={(e) =>
                        setReview({ ...review, review: e.target.value })
                    }
                    rows={20}
                    ref={textAreaRef}
                    className="border w-75 md:w-150"
                    value={review.review}
                ></textarea>
            </fieldset>
            <button
                onClick={handleSave}
                className=" mt-3 rounded-xl  h-10 w-30 cursor-pointer bg-gray-700 text-white hover:bg-gray-900 hover:scale-105 transition"
            >
                Save
            </button>
        </form>
    )
}
