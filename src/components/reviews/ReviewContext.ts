import { createContext } from "react"
import type { ReviewContextTypes } from "../../types/reviewTypes"

export const ReviewContext = createContext<ReviewContextTypes | undefined>(
    undefined
)
