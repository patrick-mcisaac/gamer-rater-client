import type React from "react"
import { ReviewContext } from "./ReviewContext"
import type { ReviewType } from "../../types/reviewTypes"
import { useState } from "react"

interface Props {
    children: React.ReactNode
}
export const ReviewProvider = ({ children }: Props) => {
    const [reviews, setReviews] = useState<ReviewType[] | undefined>(undefined)
    const createReview = (body: ReviewType, token: string) => {
        return fetch(`http://localhost:8000/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${JSON.parse(token).token}`
            },
            body: JSON.stringify(body)
        })
    }

    const getGameReviews = (id: string) => {
        const token = localStorage.getItem("gamer_token")
        if (token) {
            fetch(`http://localhost:8000/reviews?game=${id}`, {
                headers: {
                    Authorization: `Token ${JSON.parse(token).token}`
                }
            })
                .then((res) => res.json())
                .then(setReviews)
        }
    }

    return (
        <ReviewContext.Provider
            value={{ createReview, getGameReviews, reviews }}
        >
            {children}
        </ReviewContext.Provider>
    )
}
