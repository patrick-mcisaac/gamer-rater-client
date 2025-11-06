export interface RatingContextType {
    createRating: (data: RatingsType, token: string) => Promise<Response>
    getUserRating: (id: string, token: string) => void
    userRating: RatingsType[] | undefined
    updateUserRating: (
        id: number,
        data: RatingsType,
        token: string
    ) => Promise<Response>
}

export interface RatingsType {
    id?: number
    rating: number
    game: number
    user?: number
}
