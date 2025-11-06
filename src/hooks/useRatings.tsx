import { useContext } from "react"
import { RatingsContext } from "../components/ratings/RatingsContext"

export const useRatings = () => {
    const context = useContext(RatingsContext)

    if (!context) {
        throw new Error("Ratings Context must be used within ratings provider")
    }
    return context
}
