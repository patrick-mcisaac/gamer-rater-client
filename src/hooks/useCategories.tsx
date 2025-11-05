import { useContext } from "react"
import { CategoryContext } from "../components/categories/CategoryContext"

export const useCategories = () => {
    const context = useContext(CategoryContext)

    if (!context) {
        throw new Error("Category context must be used in provider")
    }
    return context
}
