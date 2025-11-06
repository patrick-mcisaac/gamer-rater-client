import { useState } from "react"
import type { RatingsType } from "../../types/ratingTypes"
import { RatingsContext } from "./RatingsContext"

interface Props {
    children: React.ReactNode
}

export const RatingsProvider = ({ children }: Props) => {
    const [userRating, setUserRating] = useState<RatingsType[] | undefined>(
        undefined
    )
    const createRating = (data: RatingsType, token: string) => {
        return fetch(`http://localhost:8000/ratings`, {
            method: "POST",
            headers: {
                Authorization: `Token ${JSON.parse(token).token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }

    const getUserRating = (id: string, token: string) => {
        fetch(`http://localhost:8000/ratings?game=${id}&user=current`, {
            headers: {
                Authorization: `Token ${JSON.parse(token).token}`
            }
        })
            .then((res) => res.json())
            .then(setUserRating)
    }

    const updateUserRating = (id: number, data: RatingsType, token: string) => {
        return fetch(`http://localhost:8000/ratings/${id}`, {
            method: "PUT",
            headers: {
                Authorization: `Token ${JSON.parse(token).token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }

    return (
        <RatingsContext.Provider
            value={{
                createRating,
                getUserRating,
                userRating,
                updateUserRating
            }}
        >
            {children}
        </RatingsContext.Provider>
    )
}
