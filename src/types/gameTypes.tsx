import type { CategoryInterface } from "./CategoryTypes"

export interface GamesType {
    id: number
    title: string
    description: string
    designer: string
    year_released: string
    number_of_players: number
    estimated_time_to_play: number
    age_recommendation: number
    categories: Array<CategoryInterface>
    player_games: Array<number>
}

export interface GamesFormType {
    title: string
    description: string
    designer: string
    year_released: string
    number_of_players: number
    estimated_time_to_play: number
    age_recommendation: number
    categories: number
}

export interface GamesContextType {
    getGames: () => void
    games: GamesType[] | undefined
    game: GamesType | undefined
    getGame: (id: string) => void
    createGame: (data: GamesFormType, tokenString: string) => Promise<Response>
}
