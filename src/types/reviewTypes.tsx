export interface ReviewContextTypes {
    createReview: (body: string, token: string) => Promise<Response>
}
