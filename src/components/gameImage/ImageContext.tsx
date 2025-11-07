import { createContext } from "react"
import type { ImageContextType } from "../../types/imageTypes"

export const ImageContext = createContext<ImageContextType | undefined>(
    undefined
)
