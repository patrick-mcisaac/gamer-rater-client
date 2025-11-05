import { useEffect, useRef, useState } from "react"
import { useReviews } from "../../hooks/useReviews"

export const ReviewForm = () => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const [comment, setComment] = useState<string>("")

    const { createReview } = useReviews()

    useEffect(() => {
        textAreaRef.current?.focus()
    }, [])

    const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const token = localStorage.getItem("gamer_token")

        if (comment !== "" && token) {
            createReview(comment, token)
        }
    }
    return (
        <form className="flex flex-col justify-center items-center mt-20">
            <fieldset>
                <textarea
                    onChange={(e) => setComment(e.target.value)}
                    cols={90}
                    rows={20}
                    ref={textAreaRef}
                    className="border"
                    value={comment}
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
