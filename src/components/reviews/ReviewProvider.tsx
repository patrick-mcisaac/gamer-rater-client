import type React from "react"
import { ReviewContext } from "./ReviewContext"
import type { ReviewType } from "../../types/reviewTypes"

interface Props {
    children: React.ReactNode
}
export const ReviewProvider = ({ children }: Props) => {
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

    return (
        <ReviewContext.Provider value={{ createReview }}>
            {children}
        </ReviewContext.Provider>
    )
}
