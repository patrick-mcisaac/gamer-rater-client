import { useContext } from "react"
import { ReviewContext } from "../components/reviews/ReviewContext"

export const useReviews = () => {
    const context = useContext(ReviewContext)
    if (!context) {
        throw new Error("Review context must be used within review provider")
    }
    return context
}
