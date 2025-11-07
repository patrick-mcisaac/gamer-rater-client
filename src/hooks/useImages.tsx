import { useContext } from "react"
import { ImageContext } from "../components/gameImage/ImageContext"

export const useImages = () => {
    const context = useContext(ImageContext)
    if (!context) {
        throw new Error("Context must be used in provider")
    }
    return context
}
