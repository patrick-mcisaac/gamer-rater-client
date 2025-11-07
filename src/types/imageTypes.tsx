export interface ImageContextType {
    createImage: (token: string, data: ImageType) => Promise<Response>
}

export interface ImageType {
    id?: number
    game_id: number
    game_image: string
    user?: number
}
