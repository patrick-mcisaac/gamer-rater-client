import { createContext } from "react"
import type { RatingContextType } from "../../types/ratingTypes"

export const RatingsContext = createContext<RatingContextType | undefined>(
    undefined
)
