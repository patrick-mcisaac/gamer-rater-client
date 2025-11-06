export interface ReviewContextTypes {
    createReview: (body: ReviewType, token: string) => Promise<Response>
    getGameReviews: (id: string) => void
    reviews: ReviewType[] | undefined
}

export interface ReviewType {
    id?: number
    review: string
    game: number
    user?: number
}
