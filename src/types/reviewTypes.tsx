export interface ReviewContextTypes {
    createReview: (body: ReviewType, token: string) => Promise<Response>
}

export interface ReviewType {
    review: string
    game: number
    user?: number
}
