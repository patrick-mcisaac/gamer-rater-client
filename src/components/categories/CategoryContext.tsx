import { createContext } from "react"
import type { CategoryContextType } from "../../types/CategoryTypes"

export const CategoryContext = createContext<CategoryContextType | undefined>(
    undefined
)
