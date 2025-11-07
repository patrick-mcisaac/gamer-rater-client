import type React from "react"
import type { ImageType } from "../../types/imageTypes"
import { ImageContext } from "./ImageContext"

interface Props {
    children: React.ReactNode
}

export const ImageProvider = ({ children }: Props) => {
    const createImage = (token: string, data: ImageType) => {
        return fetch(`http://localhost:8000/game_images`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${JSON.parse(token).token}`
            },
            body: JSON.stringify(data)
        })
    }

    return (
        <ImageContext.Provider value={{ createImage }}>
            {children}
        </ImageContext.Provider>
    )
}
