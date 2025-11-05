import { useState } from "react"
import { CategoryContext } from "./CategoryContext"
import type { CategoryInterface } from "../../types/CategoryTypes"

interface CategoriesProviderProps {
    children: React.ReactNode
}
export const CategoriesProvider = ({ children }: CategoriesProviderProps) => {
    const [categories, setCategories] = useState<
        CategoryInterface[] | undefined
    >(undefined)

    const getCategories = () => {
        const token = localStorage.getItem("gamer_token")
        if (token) {
            fetch(`http://localhost:8000/categories`, {
                headers: {
                    Authorization: `Token ${JSON.parse(token).token}`
                }
            })
                .then((res) => res.json())
                .then(setCategories)
        }
    }

    return (
        <CategoryContext.Provider value={{ categories, getCategories }}>
            {children}
        </CategoryContext.Provider>
    )
}
