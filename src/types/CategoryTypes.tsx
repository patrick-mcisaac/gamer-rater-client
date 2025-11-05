export interface CategoryInterface {
    id: number
    name: string
}

export interface CategoryContextType {
    categories: CategoryInterface[] | undefined
    getCategories: () => void
}
