import { useEffect, useState } from "react"
import { useGames } from "../../hooks/useGames"
import { useNavigate, useParams } from "react-router-dom"
import { useImages } from "../../hooks/useImages"

export const ImageForm = () => {
    const { id } = useParams()

    const { game, getGame } = useGames()

    const [gameString, setGameString] = useState<string>("")

    const { createImage } = useImages()

    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            getGame(id)
        }
    }, [id])

    const getBase64 = (file, callback) => {
        const reader = new FileReader()
        reader.addEventListener("load", () => callback(reader.result))
        reader.readAsDataURL(file)
    }

    const createGameImageString = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            getBase64(e.target.files[0], (base64ImageString: string) => {
                console.log("Base64 of file is", base64ImageString)
                setGameString(base64ImageString)
            })
        }
    }
    return game ?
            <div>
                <input
                    type="file"
                    id="game_image"
                    onChange={createGameImageString}
                />
                <input type="hidden" name="game_id" value={game.id} />
                <button
                    onClick={() => {
                        const token = localStorage.getItem("gamer_token")
                        if (id) {
                            const data = {
                                game_id: parseInt(id),
                                game_image: gameString
                            }
                            if (token) {
                                createImage(token, data).then(() =>
                                    navigate(`/games/${id}`)
                                )
                            }
                        }
                    }}
                >
                    Save
                </button>
            </div>
        :   ""
}
